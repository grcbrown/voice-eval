const jsPsych = initJsPsych({
    show_progress_bar: true,
    max_load_time: 120000, // 120 seconds
    on_finish: function() {
        jsPsych.data.displayData('csv');
  }
});

let timeline = []; //Empty timeline

//PRELOAD AUDIO//
var preload_trial = {
    type: jsPsychPreload,
    audio: [
    'audio/test-1.wav',
    'audio/test-2.wav',
    'audio/test-3.wav', 
    'audio/test-4.wav'
    ],
    auto_preload: true
};

//IRB 
const irb = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <div style="font-size: 16px; text-align: center; margin-top: 25px; margin-right: 100px; margin-left: 100px; margin-bottom: 25px;">
            <img src="./image/SUSig_2color_Stree_Left.png" alt="Stanford Logo" style="max-width: 500px; margin-bottom: 20px;">
            <h3>DESCRIPTION</h3>
            <p>You are invited to participate in a research study. Its general purpose is to understand how people perceive spoken language. We are interested in how people make use of varying properties of language to infer social information about a speaker. In this study, you will hear a spoken sentence, and you will be asked to describe the speaker of the sentence in your own words. Following this, you will be asked to complete an optional demographic survey. Participation in this research is voluntary, and you are free to withdraw your consent at any time.</p>
            <h3>TIME INVOLVEMENT</h3> 
            <p>Your participation will take approximately X minutes.</p>
            <h3>PAYMENT</h3> 
            <p>You will be paid at the posted rate.</p>
            <h3>PRIVACY AND CONFIDENTIALITY</h3> 
            <p>The risks associated with this study are minimal. This judgment is based on a large body of experience with the same or similar procedures with people of similar ages, sex, origins, etc. Study data will be stored securely, in compliance with Stanford University standards, minimizing the risk of confidentiality breach. Your individual privacy will be maintained during the research and in all published and written data resulting from the study.</p>
            <h3>CONTACT INFORMATION</h3>
            <p>If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director, NAME, at (###) ###-####. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650) 723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306 USA.</p> 
            <h3>WAIVER OF DOCUMENTATION</h3>
            <p>If you agree to participate in this research, please click the 'Continue' button.</p>
        </div>
    `,
    choices: ['Continue'],
    response_ends_trial: true,
    margin_vertical: '10px'
};

//timeline.push(irb);

//INSTRUCTIONS
const instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p>INSTRUCTIONS HERE<br><br>If you understand the instructions and are ready to hear the first audio clip, click ‘Continue’.</p>",
    choices: ['Continue']
};

timeline.push(instructions);

//LISTENING TRIALS
let trial_array = create_tv_array(stimuli);
const listening_trials = {
    timeline: [
        // Step 1: Play the audio clip
        {
            type: jsPsychAudioKeyboardResponse,
            stimulus: jsPsych.timelineVariable('audio'),
            response_allowed_while_playing: false,
            trial_ends_after_audio: true,
            choices: "NO_KEYS",
            data: {
                id: jsPsych.timelineVariable('id'),
                task: 'listen'
            }
        },
        // Step 2: Collect 5 words via individual text boxes
        {
            type: jsPsychSurveyText,
            preamble: '<p>What are the first 5 words that come to mind to describe the audio clip you just heard?<br>Please enter one word per box.</p>',
            questions: [
                { prompt: 'Word 1:', name: 'word_1', rows: 1, columns: 30, required: true },
                { prompt: 'Word 2:', name: 'word_2', rows: 1, columns: 30, required: true },
                { prompt: 'Word 3:', name: 'word_3', rows: 1, columns: 30, required: true },
                { prompt: 'Word 4:', name: 'word_4', rows: 1, columns: 30, required: true },
                { prompt: 'Word 5:', name: 'word_5', rows: 1, columns: 30, required: true }
            ],
            data: {
                id: jsPsych.timelineVariable('id'),
                task: 'response'
            }
        }
    ],
    timeline_variables: trial_array,
    randomize_order: true
};

timeline.push(listening_trials);

//SURVEY INSTRUCTIONS
const transition = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p>You have completed the listening trial. You will now be directed to an optional demographic survey. <br><br> Please answer the survey questions if you feel comfortable doing so. After seeing the survey, you will be able to end the study.</p>",
    choices: ['Continue']
};

timeline.push(transition);

//SURVEY
const questionnaire = {
  type: jsPsychSurvey,
  theme: "modern",
  survey_json: {
    showQuestionNumbers: "off",
    widthMode: "responsive",
    completeText: "Finish",
    elements: [
      {
        type: "html",
        html: "<p>Please respond to the following questions if you are comfortable doing so. If you'd like to skip to the end of the experiment, click 'Finish' at the bottom of the page.</p>"
      },
      {
        type: "boolean",
        name: "understood",
        title: "Did you read and understand the instructions?",
        labelTrue: "Yes",
        labelFalse: "No",
        renderAs: "radio"
      },
      {
        type: "text",
        name: "age",
        title: "Age:",
        inputType: "number"
      },
      {
        type: "comment",
        name: "gender",
        title: "What is your gender identity?"
      },
      {
        type: "comment",
        name: "ethnicity",
        title: "What is your race and/or ethnicity?"
      },
      {
        type: "comment",
        name: "language",
        title: "What language(s) did you speak at home when you were growing up?"
      },
      {
        type: "radiogroup",
        name: "education",
        title: 'Highest level of education obtained:',
        choices: [
          "Some high school",
          "Graduated high school",
          "Some college",
          "Graduated college",
          "Hold a higher degree"
        ],
        showOtherItem: true,
        otherText: "Other (describe)"
      },
      {
        type: "radiogroup",
        name: "enjoy",
        title: 'Did you enjoy this study?',
        choices: [
          "Worse than average study",
          "Average study",
          "Better than average study"
        ]
      },
      {
        type: "radiogroup",
        name: "payment",
        title: "Do you think the payment was fair?",
        choices: [
          "The payment was fair",
          "The payment was too low"
        ]
      },
      {
        type: "comment",
        name: "comments",
        title: "Do you have any additional comments about this study?"
      }
    ]
  }
};

timeline.push(questionnaire);

//DATA COLLECTION
// capture info from Prolific
var subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
var study_id = jsPsych.data.getURLVariable('STUDY_ID');
var session_id = jsPsych.data.getURLVariable('SESSION_ID');

jsPsych.data.addProperties({
  subject_id: subject_id,
  study_id: study_id,
  session_id: session_id
});

const p_id = jsPsych.randomization.randomID(10);
const filename = `${p_id}.csv`;

const save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: "9WYG1q2Cpwp9",
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
};

timeline.push(save_data);

//THANKS
var thanks = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<p>You've finished the study. Thank you for your time!</p>
    <p><a href="https://app.prolific.com/submissions/complete?cc=C1BQGMWP">Click here to return to Prolific and complete the study</a>.</p>`,
  choices: "NO_KEYS"
};

timeline.push(thanks);

//RUN
jsPsych.run([preload_trial, timeline]);



