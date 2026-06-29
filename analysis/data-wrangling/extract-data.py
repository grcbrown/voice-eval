#!/usr/bin/env python3
"""
Pulls three things from each file:
  1. The five free-response words   -> word_1..word_5
       (JSON in the `response` column of the `survey-text` trial)
  2. The questionnaire answers       -> cognitive_1, behavioral_1, ..., comments
       (JSON in the `response` column of the `survey` trial)
  3. The humanness slider rating      -> humanness_rating
       (the `response` value of the `html-slider-response` trial)
Plus identifiers (subject_id, study_id, session_id), the voice/condition heard
(`id` column), and the source filename, so every value is tied to its unique file.

Usage:
    1. Set INPUT_DIR to the folder containing your CSV files.
    2. Set OUTPUT_FILE to where you want the combined table written.
    3. Run:  python extract_responses.py
"""

import glob
import json
import os
import pandas as pd

# ---- CONFIG: edit these two paths ----
INPUT_DIR   = "./data/raw-data/"                      # folder with your CSV files
OUTPUT_FILE = "responses-combined.csv" # where to write the combined table
# --------------------------------------

WORD_KEYS = ["word_1", "word_2", "word_3", "word_4", "word_5"]

# Preferred column order for the survey JSON. Any survey keys not listed here
# (e.g. SurveyJS extras) are appended afterwards so nothing is silently dropped.
RATING_FIELDS = ["cognitive_1", "behavioral_1", "affective_1",
                 "cognitive_2", "affective_2", "behavioral_2"]
DEMO_FIELDS   = ["understood", "age", "gender", "ethnicity", "language",
                 "education", "enjoy", "payment", "comments"]
KNOWN_SURVEY  = RATING_FIELDS + DEMO_FIELDS

# Set to False to drop the humanness rating from the output.
INCLUDE_RATING = True


def first_nonempty(series):
    for v in series:
        if pd.notna(v) and str(v).strip() != "":
            return v
    return ""


def parse_json_response(rows):
    """Parse the JSON in the `response` cell of the first matching row."""
    if rows.empty:
        return None
    raw = rows.iloc[0].get("response", "")
    if not raw:
        return {}
    try:
        return json.loads(raw)
    except (json.JSONDecodeError, TypeError):
        return None  # signals a parse failure to the caller


def rows_by_trialtype(df, trial_type, fallback_task=None):
    """Select rows by trial_type, with an optional task-column fallback."""
    sel = df[df.get("trial_type", "") == trial_type]
    if sel.empty and fallback_task and "task" in df.columns:
        sel = df[df["task"] == fallback_task]
    return sel


def extract_from_file(path):
    df = pd.read_csv(path, dtype=str, keep_default_na=False)
    notes = []

    record = {
        "source_file": os.path.basename(path),
        "subject_id":  first_nonempty(df["subject_id"]) if "subject_id" in df else "",
        "study_id":    first_nonempty(df["study_id"])   if "study_id"   in df else "",
        "session_id":  first_nonempty(df["session_id"]) if "session_id" in df else "",
        "voice":       "",
    }

    # ---- Voice / condition (from the survey-text row's `id`) ----
    word_rows = rows_by_trialtype(df, "survey-text", fallback_task="response")
    if not word_rows.empty:
        record["voice"] = word_rows.iloc[0].get("id", "")

    # ---- Humanness rating ----
    if INCLUDE_RATING:
        rating_rows = rows_by_trialtype(df, "html-slider-response", fallback_task="rating")
        record["humanness_rating"] = rating_rows.iloc[0].get("response", "") if not rating_rows.empty else ""
        if rating_rows.empty:
            notes.append("no rating row")

    # ---- Five words ----
    for k in WORD_KEYS:
        record[k] = ""
    words = parse_json_response(word_rows)
    if words is None:
        notes.append("words JSON unparseable")
    elif words == {} and word_rows.empty:
        notes.append("no survey-text row")
    else:
        for k in WORD_KEYS:
            record[k] = words.get(k, "")

    # ---- Questionnaire (survey trial) ----
    survey_rows = rows_by_trialtype(df, "survey")
    survey = parse_json_response(survey_rows)
    if survey is None:
        notes.append("survey JSON unparseable")
    elif survey_rows.empty:
        notes.append("no survey row")
    elif survey:
        record.update(survey)  # expands cognitive_1, ..., comments, plus any extras

    record["note"] = "; ".join(notes)
    return record


def main():
    paths = sorted(glob.glob(os.path.join(INPUT_DIR, "*.csv")))
    if not paths:
        print(f"No CSV files found in {INPUT_DIR!r}")
        return

    records = [extract_from_file(p) for p in paths]
    out = pd.DataFrame(records)

    # Assemble a stable column order; append any unexpected survey keys at the end.
    lead = ["source_file", "subject_id", "study_id", "session_id", "voice"]
    if INCLUDE_RATING:
        lead.append("humanness_rating")
    ordered = lead + WORD_KEYS + KNOWN_SURVEY
    extras  = [c for c in out.columns if c not in ordered and c != "note"]
    cols = [c for c in ordered if c in out.columns] + sorted(extras) + ["note"]
    out = out[cols]

    out.to_csv(OUTPUT_FILE, index=False)

    n_clean = (out["note"] == "").sum()
    print(f"Processed {len(paths)} file(s) -> {OUTPUT_FILE}")
    print(f"  {n_clean} clean; {len(out) - n_clean} flagged in the 'note' column.")
    with pd.option_context("display.max_columns", None, "display.width", 200):
        print(out.to_string(index=False))


if __name__ == "__main__":
    main()
