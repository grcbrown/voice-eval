const jsPsych = initJsPsych({
    show_progress_bar: true,
    max_load_time: 120000, // 120 seconds
    on_finish: function() {
        jsPsych.data.displayData('csv');
  }
});

let timeline = []; //Empty timeline

//PRELOAD AUDIO//
// Built from the stimuli list in trials.js, plus the attention-check clip.
var preload_trial = {
    type: jsPsychPreload,
    audio: [...stimuli.map(s => s.file), 'audio/gift.wav'],
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

//audio warning
const audio_warn = {
    type: jsPsychHtmlButtonResponse,
    choices: ['Start'],
    stimulus: `
    <div style="font-size: 16px; text-align: center; margin-top: 25px; margin-right: 100px; margin-left: 100px; margin-bottom: 25px;">
        <p>This study requires you to listen to audio clips. To ensure you can adequately hear the audio presented in this study, the next page will have an audio attention check. Please wear headphones, and be prepared to adjust the volume on your device if necessary.<br><br>When you are ready to begin the audio attention check, click 'Start'.</p>
    </div>
`,
    response_ends_trial: true
};
    
//audio check
const audio_check = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'audio/gift.wav',
    choices: ['dog', 'friend', 'gift', 'smile', 'blue'],
    prompt: audioPlayingIndicator + `
        <p><br>This is an attention check. 
        <br><br> Click on the word that is being repeated by the speaker.</p>
        `,
    response_ends_trial: true,
    trial_duration: 20000,
    on_finish: function(data) {
        if (data.response == 2) {
            data.result = "correct"
        } else{
            data.result = "incorrect"
        }
    }    
};

var feedback = {
    type: jsPsychHtmlButtonResponse,
    //trial_duration: 10000,
    stimulus: function(){
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].response;
      if(last_trial_correct == 2){
        return "<p>Correct! You are ready to begin the study.</p>"; // the parameter value has to be returned from the function
      } else {
        return "<p>Incorrect. Please adjust the volume of your device before beginning the study.</p>"; // the parameter value has to be returned from the function
      }
    },
    choices: ['Begin Study']
};

//INSTRUCTIONS
const instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <div style="font-size: 16px; text-align: center; margin-top: 25px; margin-right: 100px; margin-left: 100px; margin-bottom: 25px;">
            <p>In this study, you will hear a single audio clip of someone speaking.</p>
            <p>Please listen carefully. The clip will play <strong>once</strong> and cannot be replayed, so keep your headphones on and your volume set.</p>
            <p>After listening, you will be asked to type the first <strong>five words</strong> that come to mind to describe what you heard (one word per box), and then answer a short question about the voice.</p>
            <p>There are no right or wrong answers. We are interested in your honest first impressions.</p>
            <p>When you understand these instructions and are ready to hear the audio clip, click 'Continue'.</p>
        </div>
    `,
    choices: ['Continue']
};

//SURVEY INSTRUCTIONS
const transition = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p>You have completed the listening trial. You will now be directed to an short questionnaire about artificial intelligence, followed by an optional demographic survey. <br><br> After seeing the survey, you will be able to end the study.</p>",
    choices: ['Continue']
};

//SURVEY
const questionnaire = {
  type: jsPsychSurvey,
  theme: "modern",
  survey_json: {
    showQuestionNumbers: "off",
    widthMode: "responsive",
    completeText: "Finish",
    pages: [
      {
        name: "ai_questions",
        elements: [
          {
            type: "html",
            html: "<p><strong>Please respond to the following questions. When you are done, click 'Next' to continue to the optional demographic questions.</strong></p>"
          },
          {
            type: "html",
            html: "<p>In the following, we are interested in your attitudes towards artificial intelligence (AI). AI can execute tasks that typically require human intelligence. It enables machines to sense, act, learn, and adapt in an autonomous, human-like way. AI may be part of a computer or online platform—but it can also be encountered in various other hardware devices, such as robots.</p>"
          },
          {
            type: "rating",
            name: "cognitive_1",
            title: "To what extent do you think AI will make this world a better place?",
            minRateDescription: "Not at all",
            maxRateDescription: "To a great extent",
            isRequired: true,
            desplayMode: "buttons"
          },
          {
            type: "rating",
            name: "behavioral_1",
            title: "How much would you like to use technologies that rely on AI?",
            minRateDescription: "Not at all",
            maxRateDescription: "To a great extent",
            isRequired: true,
            desplayMode: "buttons"
          },
          {
            type: "rating",
            name: "affective_1",
            title: "To what extent do you look forward to future developments in AI?",
            minRateDescription: "Not at all",
            maxRateDescription: "To a great extent",
            isRequired: true,
            desplayMode: "buttons"
          },
          {
            type: "rating",
            name: "cognitive_2",
            title: "To what extent do you believe AI offers solutions to global problems?",
            minRateDescription: "Not at all",
            maxRateDescription: "To a great extent",
            isRequired: true,
            desplayMode: "buttons"
          },
          {
            type: "rating",
            name: "affective_2",
            title: "How positive are your feelings when you think about AI?",
            minRateDescription: "Not at all positive",
            maxRateDescription: "Very positive",
            isRequired: true,
            desplayMode: "buttons"
          },
          {
            type: "rating",
            name: "behavioral_2",
            title: "To what extent would you rather choose a technology with AI than one without it?",
            minRateDescription: "Not at all",
            maxRateDescription: "To a great extent",
            isRequired: true,
            desplayMode: "buttons"
          }
        ]
      },
      {
        name: 'demographic', 
        elements: [
      {
        type: "html",
        html: "<p><strong>Please respond to the following questions if you feel comfortable doing so. Once you have completed the survey, click 'Finish' at the bottom of the page to navigate to the end of the experiment.</strong></p>"
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
]
}
};

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

//THANKS
var thanks = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<p>You've finished the study. Thank you for your time!</p>
    <p><a href="https://app.prolific.com/submissions/complete?cc=C1BQGMWP">Click here to return to Prolific and complete the study</a>.</p>`,
  choices: "NO_KEYS"
};

//RUN
const shared_pre  = [preload_trial, audio_warn, audio_check, feedback, instructions];
const shared_post = [transition, questionnaire, save_data, thanks];

const condition_timelines = trials.map(trial => [...shared_pre, trial, ...shared_post]);

// --- Assign a condition via DataPipe ---
async function createExperiment(){
  let condition = await jsPsychPipe.getCondition("9WYG1q2Cpwp9");
  if (condition == null || condition < 0 || condition >= condition_timelines.length) {
    console.warn(`getCondition returned ${condition}; expected 0..${condition_timelines.length - 1}. Falling back to a random voice. Check the condition count in DataPipe.`);
    condition = Math.floor(Math.random() * condition_timelines.length);
  }

  timeline = condition_timelines[condition];
  jsPsych.run(timeline);
}

createExperiment();
