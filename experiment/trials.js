const trial_1 = {
    timeline: [
        // Step 1: Play the audio clip
        {
            type: jsPsychAudioKeyboardResponse,
            stimulus: 'audio/test-1.wav',
            response_allowed_while_playing: false,
            trial_ends_after_audio: true,
            choices: "NO_KEYS",
            data: {
                id: 'id-1',
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
                id: 'id-1',
                task: 'response'
            }
        },
        // Step 3: Get "humanness" rating 
        {
            type: jsPsychHtmlSliderResponse,
            stimulus: '<p>How human did the voice sound?</p>',
            labels: ['Definitely not human', 'Definitely human'],
            data: {
                id: 'id-1',
                task: 'rating'
            }
        }
    ],
};

const trial_2 = {
    timeline: [
        // Step 1: Play the audio clip
        {
            type: jsPsychAudioKeyboardResponse,
            stimulus: 'audio/test-2.wav',
            response_allowed_while_playing: false,
            trial_ends_after_audio: true,
            choices: "NO_KEYS",
            data: {
                id: 'id-2',
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
                id: 'id-2',
                task: 'response'
            }
        },
        // Step 3: Get "humanness" rating 
        {
            type: jsPsychHtmlSliderResponse,
            stimulus: '<p>How human did the voice sound?</p>',
            labels: ['Definitely not human', 'Definitely human'],
            data: {
                id: 'id-2',
                task: 'rating'
            }
        }
    ],
};

const trial_3 = {
    timeline: [
        // Step 1: Play the audio clip
        {
            type: jsPsychAudioKeyboardResponse,
            stimulus: 'audio/test-3.wav',
            response_allowed_while_playing: false,
            trial_ends_after_audio: true,
            choices: "NO_KEYS",
            data: {
                id: 'id-3',
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
                id: 'id-3',
                task: 'response'
            }
        },
        // Step 3: Get "humanness" rating 
        {
            type: jsPsychHtmlSliderResponse,
            stimulus: '<p>How human did the voice sound?</p>',
            labels: ['Definitely not human', 'Definitely human'],
            data: {
                id: 'id-3',
                task: 'rating'
            }
        }
    ],
};

const trial_4 = {
    timeline: [
        // Step 1: Play the audio clip
        {
            type: jsPsychAudioKeyboardResponse,
            stimulus: 'audio/test-4.wav',
            response_allowed_while_playing: false,
            trial_ends_after_audio: true,
            choices: "NO_KEYS",
            data: {
                id: 'id-4',
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
                id: 'id-4',
                task: 'response'
            }
        },
        // Step 3: Get "humanness" rating 
        {
            type: jsPsychHtmlSliderResponse,
            stimulus: '<p>How human did the voice sound?</p>',
            labels: ['Definitely not human', 'Definitely human'],
            data: {
                id: 'id-4',
                task: 'rating'
            }
        }
    ],
};