# Voice-description categories (responses_combined.csv)
categories <- list(
  content = c(
    "(span)", "(the)", "`Beautiful", "bird", "a", "Above",
    "above", "act", "after", "air", "along", "aparant",
    "APPARENTLY", "Apparently", "apparently", "appear", "Arc", "arc",
    "ARCH", "Arch", "arch", "Arches", "arising",
    "around", "ball", "Beam", "Beautiful", "beautiful",
    "Beauty", "beauty", "beginning", "BEYOND", "Beyond",
    "beyond", "blue", "branch", "cathes", "caves",
    "Chromatography", "cloud", "Clouds", "clouds", "Cloudy",
    "Color", "color", "Colorful", "colorful", "Colors", "confusing",
    "colors", "colors`", "colour", "colours", "come", "comes", "day",
    "diffraction", "Division", "division", "Drizzle", "drop",
    "droplets", "drops", "earth", "end", "Ending",
    "Ends", "ends", "fall", "Fire", "flower",
    "Form", "form", "Forms", "forms", "God", "Gold",
    "gold", "green", "grows", "hit", "hits",
    "HORIZON", "Horizon", "horizon", "horzion", "in", "important", 
    "Lamps", "Light", "light", "lightning", "Lights",
    "lights", "like", "long", "luck", "meadow",
    "meet", "Midnight", "Morning", "Nature", "nature",
    "Nature minded", "Night", "night", "of", "on", "optics",
    "over", "pair", "Part", "passes", "Path",
    "path", "photons", "Physics", "physics", "prisim",
    "PRISM", "Prism", "prism", "prismq", "prizm", "Prison", "prison", 
    "raid", "RAIN", "Rain", "rain", "rain drop",
    "rainbaw", "RAINBOW", "Rainbow", "rainbow", "Rainbows",
    "rainbows", "Rainbox", "raindow", "Raindrop", "raindrop",
    "Raindrops", "raindrops", "rainfall", "Raining", "raining",
    "Rainy", "rainy", "Rays", "red", "refract", "vague",
    "round", "Sage", "Science", "science", "Scienctific", "scientic", "Scientific", 
    "scientific", "shamrock", "Shape", "spectacle",
    "shape", "Shine", "shines", "shone", "showers",
    "Site", "skies", "Sky", "sky", "sky watcher",
    "spectrum", "spring", "storm", "storms", "Strike",
    "Strikes", "strikes", "Sun", "sun", "sunglight",
    "Sunlight", "sunlight", "Sunny", "sunrise", "sunrize",
    "sunset", "Sunshine", "sunshine", "Sunsine", "Symmetrical",
    "Take", "take", "takes", "THE", "The",
    "the", "THESE", "this", "thunder",
    "thunderstorms", "time", "touch", "tree", "Two ends",
    "universe", "variety", "Verizon", "visual", "vision", "Water", "water",
    "way", "Weather", "weather", "Wet", "wet",
    "When", "when", "white light", "winds",
    "with", "Wodded", "world", "Magical", "wordy"
  ),
  gender = c(
    "androgenous", "Androgynous", "androgynous", "effeminate", "Female",
    "female", "Femenine", "Feminine", "feminine", "Genderless",
    "Gentleman", "girl", "Girlie", "Girly", "girly",
    "Guy", "he", "Lady", "lady", "Male",
    "male", "Man", "man", "Manly", "Masculine",
    "masculine", "Woman", "woman", "they", "them", "trans"
  ),
  sexuality = c(
    "gay"
  ),
  other_sgi = c(
    "pass" 
  ),
  persona = c(
    "admirer", "Airhead", "Alpha", "bohemian",
    "Bro", "bumbkin", "Cartoon", "cartoon",
    "cartoonish", "Dad", "ditsy", "ditzy",
    "Documentary", "dude", "geek", "geeky",
    "Hader", "hippie", "hippy", "impressionist",
    "Isaac", "Kathy bates", "kooky", "Leprachaun", "Leprechaun",
    "leprechaun", "lobster", "McDonald’s", "motherly", "Mckenna", "meryl",
    "Morgan Freeman", "nerd", "Nerdy", "nerdy", "Newton",
    "old-fashioned", "performative", "Preppy", 
    "Radio", "reading a book", "Santa",
    "spicoli", "Spongebob", "stoner", "story", "storylike", 
    "Story Teller", "Story-teller", "Storyteller", "storyteller", "Storytelling",
    "streep", "Surfer", "surfer", "TV Voice", "valley",
    "valley girl", "voiceover", "Wizard",
    "wizard", "grandfather", "earthy",
    "Grandma", "grandma", "grandmother", "Grandpa", "grandpa",
    "Cool", "cool", "corny"
  ),
  region = c(
   "American", "Boston",
    "boston", "British", "british", "Bronx", "California",
    "Californian", "californian", "Country", "country", 
    "foreign", "foreigner", "hawaii", "Italian", 
    "New Jersey", "New York", "New york", "New Yorker", "Northeast",
    "northern?", "Northerner", "northerner", "Southern", "southern",
    "southernish"
  ),
  locale = c(
    "Alley", "City", "city", "farm", "park",
    "rural", "rustic", "School", "Urban", "urban"
  ),
  education = c(
    "academic", "analytuical", "Articulate", "articulate", "capable",
    "competent", "Complex", "comprehensive", "concise", "Descriptive",
    "descriptive", "Detailed", "detailed", "Educated", "educated",
    "educational", "educative", "Eloquent", "eloquent", "enlightening",
    "Experience", "experienced", "expert", "explanation", "facts",
    "factual", "Fluent", "Gifted", "inexperienced", "informational",
    "Informative", "informative", "Informed", "informed", "insightful",
    "Intellectual", "intelligence", "Intelligent", "intelligent", "knowledeable",
    "Knowledgable", "knowledgable", "Knowledge", "knowledge", "Knowledgeable",
    "knowledgeable", "learning", "legible", "Literate",     
    "Philisophical", "Professional", "professional", "Profound",
    "scholar", 
    "Simple", "simple", "skilled", "Smart", "smart", "sophisticated", "Succint",
    "Technical", 
    "very descriptive", "Well Spoken", "well spoken", "Well-spoken", "well-spoken",
    "wellspoken", "Wisdom", "Wise", "wise", "worldly", "unprofessional",
    "dumb", "excellent communication", "great speaker", "Idiot", "incorrect",
    "stupid", "Unintelligent", "unintelligent"
  ),
  profession = c(
    "announcer", "counselor", "educator", "Explainer", "explainer",
    "Guider", "instructor", "Lecturer", "lecturer", "librarian",
    "military", "Narrator", "narrator", "pastor", "poet",
    "preach", "professor", "Prospector", "prospector", "reader", "researcher", 
    "science teacher", "Scientist", "scientist", "simplifier", "Speaker", "speaker",
    "Student", "student", "teach", "Teacher", "teacher",
    "teaching", "therapist", "weatherman", "Wheatherman", "writer"
  ),
  race_ethnicity = c(
    "African American", "African-American", "Black", "black", "black vernacular",
    "Caucasian", "Latina", "Person of Color", "White", "white"
  ),
  social_standing = c(    
    "Dignity", "entitled", "ghetto", "refined", "Rich",
    "rich", "pretentious", "Snooty"
  ),
  other_soc = c(
    "casual", "conversational", "culture", "Diversity", "Formal",
    "infraction", "Public", "Single", "unpopular", 
    "Accent", "accent", "accented", "dialect", "native"
  ),
  age = c(
    "Adult", "ancient", "Antiquated", "Boomer", "childish", "childlike",
    "Elder", "elder", "Elderly", "elderly", 
    "kids", "Mature", "mature", "middle age", "middle aged",
    "Middle-Aged", "middle-aged", "Old", "old", "Older",
    "older", "senior", "twenties", "Young", "young",
    "younger", "Youthful"
  ),
  appearance = c(
    "balding", "big", "Blonde", "blonde",
    "fat", "gray suit", "Hands", "short", "size",
    "smiling"
  ),
  attractiveness = c(
    "Attractive", "lovely", "luscious", "pretty", "Stunning"
  ),
  health = c(
    "afflictive", "Drunk", "impaired",  "sleepy", "smoker", "tired", "weed" 
  ),
  other_phys = character(0),
  agreeableness = c(
    "aggressive", "approachable", "Blunt", "blunt", "Cairing",
    "Caring", "caring", "Charming", "comfortable", "Comforting",
    "Compassionate", "condescending", "Down to earth", "empathetic", "fair",
    "flippant", "Friendly", "friendly", "friiendly", "Gentle",
    "gentle", "giving", "helpful", "Humble", "Kind",
    "kind", "likeable", "Lileable", "loving", 
    "NICE", "Nice", "nice", "nurturing", "opinionated",
    "Ornery", "patience", "patient", "Peaceful", "peaceful",
    "polite", "reassuring", "relatable", "sassy", "Sincere",
    "sincere", "snark", "Sweet", "sweet", "tender",
    "Trustworthy", "Truthfull", "uncaring", "Understanding", "understanding", 
    "wholesome", "safe", "Annoying", "annoying", "Tiring", "irritating", "obnoxious", 
    "off-putting", "Pleasant", "pleasant", "pleasent", "Positive", "positive",
    "unlikable", "unpleasant", "unfavorable", "cliched"
  ),
  extraversion = c(
    "active", "Animated", "animated", "assertive", "Assured",
    "Boisterous", "bubbly", "charismatic", "cheerful", "Confidant",
    "Confident", "confident", "Dominant", "eager", "Energetic",
    "energetic", "energy", "Engaged", "engaged", "engagin",
    "Engaging", "engaging", "enthused", "Enthusiastic", "enthusiastic", "Exaggerated", 
    "exaggerated", "excited", "Expressive", "expressive", "exuberant", "Flamboyant",
    "flamboyant", "joking", "lively", "locquatious", "Motivational",
    "outgoing", "outspoken", "Passionate", "passionate", "rambler", "Rambling", 
    "reserved", "Self-assured", "stoked", "excited with word", "certain",
    "unenthusiastic", "Unexcited", "upbeat", "Fun", "fun", "Funny", "funny", 
    "Humorous", "goofy", "Silly","silly"
  ),
  openness = c(
    "Artistic", "artistic", "Artsy", "artsy", "create",
    "Creative", "creative", "Curious", "curious", "dreamer",
    "dreamy", "eccentric", "explorative", "Imaginative", "imaginative",
    "inquisitive", "Inspiration", "inspiring", "inspirtional", "interest",
    "Interested", "interested", "Intrigued", "intrigued", "Intuitive",
    "Metaphor", "open", "Pensive", "Poetic", "poetic",
    "Poetry", "poetry", "Reflecting", "reflecting", "Reflection",
    "reflection", "shallow", "thinker", "thoughful", "Thoughtful",
    "thoughtful", "unconventional", "Unique", "unique", "versatile",
    "Vivid", "vivid", "witty", "whimsical", "wonder", "Longing",
    "Different", "Interesting", "interesting", "intersting", "odd",
    "Strange", "strange", "uninteresting", "uninteristing", "usual",
    "weird"
  ),
  emo_stab = c(
    "Calm", "calm", "Calming", "calming", 
    "Collected", "composed", "content", "emotional", "emotionless",
    "erratic", "hesitant", "hopeful",
    "Mellow", "mellow", "moody", "nervous", "neutral mindset", "non-assertive", 
    "non-emotional", "nonchalant", "Peace", "peace", "relaxation", "Relaxed",
    "relaxed", "Relaxing", "relaxing", "relaxing.",  "Scattered", "serene", "Serenity", 
    "serenity", "Dramatic", "dramatic", "sootheing", "Soothing", "soothing", "stern", 
    "Stoic", "stoic", "tranquil", "Unemotional", "unemotional", "unsure", "wistful",
    "Crazy", "uncomfortable", "Suspense",   "Bombastic", "bombastic"
  ),
  cons = c(
    "Accurate", "accurate", "attention", "Attentive", "Carefree",
    "carefree", "careful", "cautious", "consistent", "Definite",
    "Deliberate", "deliberate", "diligent", "Driven", "focus",
    "Focused", "focused", "Intent", "invested", "involved",
    "Measured", "Motivated", "motivated", "Observant", "observant",
    "proper", "punctuated", "punctuates", "Rehearsed", "sequential",
    "wasteful", "percise", "precise", "thorough", "non-serious", "Serious",  "serious"
  ),
  other_psych = c(
    "Amused", "Angry", "angry", "attitude", "awe",
    "bold", "brave", "disinterested", "Euphoric", 
    "exciting", "fanatic", "Free", "Freedom", "Happiness",
    "happiness", "Happy", "happy", "Hope", "hope",
    "jolly", "joy", "Joyful", "life",
    "Motivation", "proud", "spiritual",
    "unaware", "Upset", "autist", "autistic", "bored"
  ),
  naturalness = c(
    "AI", "Ai", "ai", "Ai generated", "Artificial",
    "artificial", "authentic", "automatic", "believable", "Computer",
    "digital", "Fake", "fake", "fake?", "Forced",
    "forced", "Genuine", "Human", "human like", "inauthentic",
    "inhuman", "manufactured", "natural", "real", "robot",
    "Robotic", "robotic", "Scripted", "Technological", "unnatural",
    "Unrealistic", "unrealistic", "untenable" ,  "credible", "off" 
  ),
  contour = c(
    "emphasis", "Flat", "flat", "flat tone", "high",
    "high pitched", "high-pitched", "higher pitch voice", "low", "modulated",
    "Monotone", "monotone", "Monotoned", "Monotonous", "monotonous",
    "Neutral tone", "question", "Questioning", "questioning", "range",
    "Slow tone", "tone", "even-toned","even"
  ),
  voice_qual = c(
    "Articulated", "Audible", "audible", "bassy", "breathy", "Bright",
    "bright", "chocolate", "clarity", "Clear", "clear",
    "clear voice", "cler", "crisp", "Dainty", "Deep",
    "deep", "deep voice", "distinct", "dry", 
    "fluid", "grainy", "Grating", "grating", "gravelly",
    "Gruff", "gruff", "gruffy", "Harsh", "Hoarse",
    "liquid", "Nasal", "nasal", "nasally", "Nasaly",
    "Raspy", "raspy", "Rough", "rough", "scratchy",
    "shrill", "Smooth", "smooth", "sound", "subtle",
    "twang", "vocal", "Vocal fry", "Warm",
    "warm", "weathered", "whine"
  ),
  intensity = c(
    "commanding", "explosive", "Firm", "firm", "forceful",
    "Full", "Intense", "intense", "Loud", "loud",
    "louder", "Powerful", "Projective", "Slam", "Soft",
    "soft", "Soft Spoken", "Soft spoken", "Soft-spoken", "soft-spoken",
    "softspoken", "Strong", "strong", "quiet"
  ),
  Speech_rhythm = c(
    "breaks", "brisk", "cadence", "clunky",  "Fast", "fast", "flowing",
    "hurry", "jumbled",  "Paced", "quick", "rapid", "rushed", "rushing", "Slow", 
    "slow", "slower","Steady", "steady", "unrushed", "well-paced", "stilted"
  ), 
  other_speech = c(
    "coherent",  "Direct", "direct", "embelished", "Embellished",
    "emotive", "enunciation","incomplete", "lyrical", "narrative",
    "notecards", "Reading", "reading", "Speech", "split", "splits", "Spoken",
    "straightforward", "Unclear", "understandable"
  ), 
  other = c(
    "Neutral", "neutral", "amazing", "Average", "average", "Bad", "bland", "fine", 
    "nondescript", "okay", "easy", "Dull", "Good", "good", "lackluster", "Outstanding", 
    "Word", "outstanding", "quality", "Wonderful!", "Boring", "boring", "Forgettable",
    "Promise", "trap", "voice"
  )
)
