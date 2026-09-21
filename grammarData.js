const grammarPool = [
  // --- Unit 1-2: am/is/are (Present) ---
  {
    id: 1,
    topic: "am/is/are",
    level: "A1",
    question: "My brother _____ a computer engineering student at university.",
    options: ["is", "are", "am", "be"],
    answer: "is",
    translation: "Erkek kardeşim üniversitede bir bilgisayar mühendisliği öğrencisidir.",
    explanation: "Tekil üçüncü şahıslar (he/she/it) ve tekil isimler için geniș zamanda 'to be' fiilinin 'is' hali kullanılır."
  },
  {
    id: 2,
    topic: "am/is/are",
    level: "A1",
    question: "_____ you interested in modern art and design?",
    options: ["Is", "Are", "Am", "Do"],
    answer: "Are",
    explanation: "'You' öznesi ile soru sorulurken ve ana fiil bir sıfat tamlaması olduğunda 'Are' başa gelir."
  },

  // --- Unit 3-4: Present Continuous (I am doing) ---
  {
    id: 3,
    topic: "Present Continuous",
    level: "A1",
    question: "Please be quiet. I _____ to write an algorithm right now.",
    options: ["try", "am trying", "tried", "is trying"],
    answer: "am trying",
    explanation: "'Right now' ve 'Please be quiet' gibi konuşma anını belirten durumlarda Present Continuous (am/is/are + V-ing) kullanılır."
  },

  // --- Unit 5-7: Present Simple (I do / don't / do you?) ---
  {
    id: 4,
    topic: "Present Simple",
    level: "A1",
    question: "Alex _____ coffee in the evening; he prefers herbal tea.",
    options: ["doesn't drink", "don't drink", "isn't drinking", "not drinks"],
    answer: "doesn't drink",
    explanation: "Present Simple olumsuz yapısında 3. tekil şahıs için 'doesn't + fiilin yalın hali (V1)' kullanılır."
  },
  {
    id: 5,
    topic: "Present Simple",
    level: "A1",
    question: "Where _____ your grandparents live during the winter?",
    options: ["does", "do", "are", "is"],
    answer: "do",
    explanation: "Çoğul öznelerde (your grandparents = they) Present Simple soru cümlesi kurarken 'do' yardımcı fiili kullanılır."
  },

  // --- Unit 10-12: Past Simple (was/were & did) ---
  {
    id: 6,
    topic: "Past Simple",
    level: "A2",
    question: "They _____ at the library yesterday because the campus was closed.",
    options: ["weren't", "wasn't", "didn't", "aren't"],
    answer: "weren't",
    explanation: "'They' öznesi için geçmiş zaman durum bildiren olumsuzluk 'were not' (weren't) şeklindedir."
  },
  {
    id: 7,
    topic: "Past Simple",
    level: "A2",
    question: "Did you _____ the new software update last night?",
    options: ["install", "installed", "installing", "installs"],
    answer: "install",
    explanation: "'Did' yardımcı fiiliyle geçmiş zaman sorusu sorulduğunda esas fiil daima yalın (V1) halde kalır."
  },

  // --- Unit 25-28: Future (will & going to) ---
  {
    id: 8,
    topic: "Future Forms",
    level: "A2",
    question: "Look at the dark clouds! It _____ rain very heavily in a few minutes.",
    options: ["will", "is going to", "rains", "rained"],
    answer: "is going to",
    explanation: "Gözle görülür somut bir kanıta dayanarak yapılan güçlü tahminlerde 'be going to' kalıbı kullanılır."
  },

  // --- Unit 30: Modals (can and could) ---
  {
    id: 9,
    topic: "can and could",
    level: "A2",
    question: "When I was in primary school, I _____ speak English at all.",
    options: ["can't", "couldn't", "mustn't", "shouldn't"],
    answer: "couldn't",
    explanation: "Geçmişteki yeteneksizliği veya yapamadığımız şeyleri ifade ederken 'couldn't' kullanılır."
  },

  // --- Unit 37-38: There is / there are ---
  {
    id: 10,
    topic: "There is / are",
    level: "A1",
    question: "_____ any empty seats left in the lecture hall?",
    options: ["Is there", "Are there", "There are", "Have there"],
    answer: "Are there",
    explanation: "Çoğul isimlerle (seats) varlık sorusu sorulurken 'Are there...?' kalıbı kullanılır."
  },

  // --- Unit 59-64: Pronouns & Possessives ---
  {
    id: 11,
    topic: "Pronouns & Possessives",
    level: "A1",
    question: "This backpack isn't mine. Is it _____?",
    options: ["your", "yours", "you", "yourself"],
    answer: "yours",
    explanation: "İsim olmadan tek başına kullanılan bağımsız iyelik zamiri 'yours' (seninki) kalıbıdır."
  }
];
