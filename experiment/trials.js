// ============================================================
// STIMULI
// One entry per voice clip. `id` is written into the data file so
// you can tell which voice a participant heard; `file` is the path
// to the audio relative to the experiment root. The descriptive
// source name is kept in a trailing comment for your reference only.
// To add/remove a voice, just edit this list — everything below it
// (trials, preload, and conditions) is generated from it.
// ============================================================
const stimuli = [
    // --- ElevenLabs (.mp3) ---
    { id: 'whytee',            file: 'audio/whytee.mp3' },            // Whytee
    { id: 'xiaoxi',            file: 'audio/xiaoxi.mp3' },            // Xiaoxi – Chinese American podcast host
    { id: 'scypher',           file: 'audio/scypher.mp3' },          // Scypher
    { id: 'riley',             file: 'audio/riley.mp3' },            // Riley – Shrill, Optimistic & Content
    { id: 'john',              file: 'audio/john.mp3' },             // John – Casual & Raspy Surfer
    { id: 'gracie_valley',     file: 'audio/gracie_valley.mp3' },    // Gracie Valley – Seductive & Sassy
    { id: 'zoe',               file: 'audio/zoe.mp3' },              // Zoe – Charismatic, Gritty & Engaging
    { id: 'grampa_werthers',   file: 'audio/grampa_werthers.mp3' },  // Grampa Werthers – Old & Cranky
    { id: 'maria_moody',       file: 'audio/maria_moody.mp3' },      // Maria Moody – Grandmotherly Storykeeper
    { id: 'brother_wayne',     file: 'audio/brother_wayne.mp3' },    // Brother Wayne – Warm Southern Preacher
    { id: 'young_jamal',       file: 'audio/young_jamal.mp3' },      // Young Jamal
    { id: 'zuri',              file: 'audio/zuri.mp3' },             // Zuri – Casual, Calm & Clear
    { id: 'boston_bob',        file: 'audio/boston_bob.mp3' },       // Boston Bob – Wicked Pissah
    { id: 'dorothy',           file: 'audio/dorothy.mp3' },          // Dorothy – Insightful Supportive Grandma
    // --- HumeAI (.wav) ---
    { id: 'vince_duglus',      file: 'audio/vince_duglus.wav' },     // Vince Duglus
    { id: 'campfire_narrator', file: 'audio/campfire_narrator.wav' },// campfire narrator
    { id: 'caring_mother',     file: 'audio/caring_mother.wav' },    // caring mother
    { id: 'geraldine_wallace', file: 'audio/geraldine_wallace.wav' },// Geraldine Wallace
];

function makeTrial(stim) {
    return {
        timeline: [
            // Step 1: Play the audio clip
            {
                type: jsPsychAudioKeyboardResponse,
                stimulus: stim.file,
                prompt: audioPlayingIndicator,
                response_allowed_while_playing: false,
                trial_ends_after_audio: true,
                choices: "NO_KEYS",
                data: {
                    id: stim.id,
                    task: 'listen'
                }
            },
            // Step 2: Collect 5 words via individual text boxes
            {
                type: jsPsychSurveyText,
                preamble: '<p>What are the first 5 words that come to mind to describe the <b>speaker</b> you just heard?<br>Please enter one word per box.</p>',
                questions: [
                    { prompt: 'Word 1:', name: 'word_1', rows: 1, columns: 30, required: true },
                    { prompt: 'Word 2:', name: 'word_2', rows: 1, columns: 30, required: true },
                    { prompt: 'Word 3:', name: 'word_3', rows: 1, columns: 30, required: true },
                    { prompt: 'Word 4:', name: 'word_4', rows: 1, columns: 30, required: true },
                    { prompt: 'Word 5:', name: 'word_5', rows: 1, columns: 30, required: true }
                ],
                data: {
                    id: stim.id,
                    task: 'response'
                }
            },
            // Step 3: Get "humanness" rating
            {
                type: jsPsychHtmlSliderResponse,
                stimulus: '<p>How human did the voice sound?</p>',
                labels: ['Definitely not human', 'Definitely human'],
                data: {
                    id: stim.id,
                    task: 'rating'
                }
            }
        ],
    };
}

// One trial block per voice, in the same order as `stimuli`.
// (Replaces the old trial_1, trial_2, trial_3, trial_4.)
const trials = stimuli.map(makeTrial);
