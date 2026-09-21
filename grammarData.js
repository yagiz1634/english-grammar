const grammarPool = [
  // ==========================================
  // --- UNIT 1-2: am/is/are (Present) ---
  // ==========================================
  {
    id: 1,
    topic: "am/is/are",
    level: "A1",
    question: "My brother _____ a computer engineering student at university.",
    options: ["is", "are", "am", "be"],
    answer: "is",
    translation: "Erkek kardeşim üniversitede bir bilgisayar mühendisliği öğrencisidir.",
    explanation: "Tekil üçüncü şahıslar (he/she/it) ve tekil isimler için geniş zamanda 'to be' fiilinin 'is' hali kullanılır."
  },
  {
    id: 2,
    topic: "am/is/are",
    level: "A1",
    question: "_____ you interested in modern art and design?",
    options: ["Is", "Are", "Am", "Do"],
    answer: "Are",
    translation: "Modern sanat ve tasarımla ilgileniyor musun?",
    explanation: "'You' öznesi ile soru sorulurken ve ana fiil bir sıfat (interested) olduğunda başa 'Are' gelir."
  },
  {
    id: 3,
    topic: "am/is/are",
    level: "A1",
    question: "I _____ hungry, but I'm very thirsty.",
    options: ["am not", "isn't", "aren't", "don't"],
    answer: "am not",
    translation: "Aç değilim ama çok susadım.",
    explanation: "'I' öznesinin olumsuz to-be hali 'am not' şeklindedir."
  },
  {
    id: 4,
    topic: "am/is/are",
    level: "A1",
    question: "Where _____ your parents from?",
    options: ["is", "are", "do", "does"],
    answer: "are",
    translation: "Annen ve baban nereli?",
    explanation: "'Parents' (ebeveynler) çoğul bir kelime olduğu için 'they' kabul edilir ve 'are' kullanılır."
  },
  {
    id: 5,
    topic: "am/is/are",
    level: "A1",
    question: "It _____ very warm today. We can go outside.",
    options: ["are", "am", "is", "be"],
    answer: "is",
    translation: "Bugün hava çok sıcak. Dışarı çıkabiliriz.",
    explanation: "Hava durumu belirtilirken 'It' öznesi kullanılır ve yardımcı fiil 'is' olur."
  },

  // ==========================================
  // --- UNIT 3-4: Present Continuous (I am doing) ---
  // ==========================================
  {
    id: 6,
    topic: "Present Continuous",
    level: "A1",
    question: "Please be quiet. I _____ to write an algorithm right now.",
    options: ["try", "am trying", "tried", "is trying"],
    answer: "am trying",
    translation: "Lütfen sessiz ol. Şu an bir algoritma yazmaya çalışıyorum.",
    explanation: "'Right now' ve 'Please be quiet' gibi konuşma anını belirten durumlarda Present Continuous (am/is/are + V-ing) kullanılır."
  },
  {
    id: 7,
    topic: "Present Continuous",
    level: "A1",
    question: "Look! It _____ again. We can't play tennis.",
    options: ["rains", "is raining", "rain", "raining"],
    answer: "is raining",
    translation: "Bak! Yine yağmur yağıyor. Tenis oynayamayız.",
    explanation: "'Look!' (Bak!) ifadesi eylemin o an gerçekleştiğini gösterir, bu yüzden şimdiki zaman kullanılır."
  },
  {
    id: 8,
    topic: "Present Continuous",
    level: "A1",
    question: "Why _____ an umbrella? It's not raining.",
    options: ["do you carry", "are you carrying", "you carry", "is you carrying"],
    answer: "are you carrying",
    translation: "Neden şemsiye taşıyorsun? Yağmur yağmıyor.",
    explanation: "Şu anki (geçici) bir durumu sorarken 'Are you + V-ing' kalıbı kullanılır."
  },
  {
    id: 9,
    topic: "Present Continuous",
    level: "A1",
    question: "The children _____ to sleep at the moment, so turn down the TV.",
    options: ["tries", "are trying", "is trying", "try"],
    answer: "are trying",
    translation: "Çocuklar şu an uyumaya çalışıyor, bu yüzden televizyonun sesini kıs.",
    explanation: "'Children' çoğul olduğu için (they), şimdiki zamanda 'are + V-ing' alır."
  },

  // ==========================================
  // --- UNIT 5-7: Present Simple (I do / don't / do you?) ---
  // ==========================================
  {
    id: 10,
    topic: "Present Simple",
    level: "A1",
    question: "Alex _____ coffee in the evening; he prefers herbal tea.",
    options: ["doesn't drink", "don't drink", "isn't drinking", "not drinks"],
    answer: "doesn't drink",
    translation: "Alex akşamları kahve içmez; bitki çayını tercih eder.",
    explanation: "Geniş zaman (Present Simple) olumsuz yapısında 3. tekil şahıs (he) için 'doesn't + fiilin yalın hali (V1)' kullanılır."
  },
  {
    id: 11,
    topic: "Present Simple",
    level: "A1",
    question: "Where _____ your grandparents live during the winter?",
    options: ["does", "do", "are", "is"],
    answer: "do",
    translation: "Büyükanne ve büyükbaban kış aylarında nerede yaşıyor?",
    explanation: "Çoğul öznelerde (your grandparents = they) geniş zaman soru cümlesi kurarken 'do' yardımcı fiili kullanılır."
  },
  {
    id: 12,
    topic: "Present Simple",
    level: "A1",
    question: "My father is an architect. He _____ buildings.",
    options: ["design", "designs", "designing", "is design"],
    answer: "designs",
    translation: "Babam bir mimar. O, binalar tasarlar.",
    explanation: "Meslekler ve kalıcı gerçekler Present Simple ile ifade edilir. 'He' öznesi fiile '-s' takısı aldırır."
  },
  {
    id: 13,
    topic: "Present Simple",
    level: "A1",
    question: "What time _____ the banks close in Turkey?",
    options: ["do", "does", "are", "is"],
    answer: "do",
    translation: "Türkiye'de bankalar saat kaçta kapanır?",
    explanation: "'Banks' kelimesi çoğuldur (they). Bu yüzden geniş zaman soru kelimesi olarak 'do' kullanılır."
  },
  {
    id: 14,
    topic: "Present Simple",
    level: "A1",
    question: "I _____ go to the gym on Sundays. It's my rest day.",
    options: ["don't", "doesn't", "am not", "not"],
    answer: "don't",
    translation: "Pazarları spor salonuna gitmem. O benim dinlenme günümdür.",
    explanation: "'I' öznesi için geniş zamanda olumsuz yardımcı fiil 'don't' kelimesidir."
  },

  // ==========================================
  // --- UNIT 8-9: Present Continuous vs Present Simple ---
  // ==========================================
  {
    id: 15,
    topic: "Continuous vs Simple",
    level: "A2",
    question: "Water _____ at 100 degrees Celsius.",
    options: ["is boiling", "boils", "boil", "boiled"],
    answer: "boils",
    translation: "Su, 100 santigrat derecede kaynar.",
    explanation: "Bilimsel ve genel geçer gerçekler daima Present Simple (geniş zaman) ile ifade edilir."
  },
  {
    id: 16,
    topic: "Continuous vs Simple",
    level: "A2",
    question: "Excuse me, _____ English?",
    options: ["are you speaking", "do you speak", "you speak", "speak you"],
    answer: "do you speak",
    translation: "Afedersiniz, İngilizce konuşuyor musunuz? (Biliyor musunuz?)",
    explanation: "Bir dili bilip bilmeme durumu kalıcı bir gerçektir, bu yüzden şimdiki zaman değil geniş zaman (Do you speak) kullanılır."
  },
  {
    id: 17,
    topic: "Continuous vs Simple",
    level: "A2",
    question: "I _____ the answer to this math problem.",
    options: ["am not knowing", "don't know", "doesn't know", "not know"],
    answer: "don't know",
    translation: "Bu matematik probleminin cevabını bilmiyorum.",
    explanation: "'Know' (bilmek), 'want' (istemek) gibi durum (state) fiilleri genellikle 'ing' takısı almaz ve geniş zamanla kullanılır."
  },
  {
    id: 18,
    topic: "Continuous vs Simple",
    level: "A2",
    question: "She usually goes to work by car, but this week she _____ the bus.",
    options: ["takes", "is taking", "take", "taking"],
    answer: "is taking",
    translation: "O genellikle işe arabayla gider, ama bu hafta otobüse biniyor.",
    explanation: "Genel alışkanlıklar için Present Simple (goes), 'bu hafta' gibi geçici durumlar için Present Continuous (is taking) kullanılır."
  },

  // ==========================================
  // --- UNIT 10-12: Past Simple (was/were & did) ---
  // ==========================================
  {
    id: 19,
    topic: "Past Simple",
    level: "A2",
    question: "They _____ at the library yesterday because the campus was closed.",
    options: ["weren't", "wasn't", "didn't", "aren't"],
    answer: "weren't",
    translation: "Kampüs kapalı olduğu için dün kütüphanede değillerdi.",
    explanation: "'They' öznesi için geçmiş zamanda durum (to-be) bildiren olumsuzluk 'were not' (weren't) şeklindedir."
  },
  {
    id: 20,
    topic: "Past Simple",
    level: "A2",
    question: "Did you _____ the new software update last night?",
    options: ["install", "installed", "installing", "installs"],
    answer: "install",
    translation: "Dün gece yeni yazılım güncellemesini yükledin mi?",
    explanation: "'Did' yardımcı fiiliyle geçmiş zaman sorusu sorulduğunda, cümlede asıl fiil daima yalın (V1) halde kalır."
  },
  {
    id: 21,
    topic: "Past Simple",
    level: "A2",
    question: "I _____ my keys this morning, so I had to call a locksmith.",
    options: ["lose", "lost", "loosed", "did lose"],
    answer: "lost",
    translation: "Bu sabah anahtarlarımı kaybettim, bu yüzden çilingir çağırmak zorunda kaldım.",
    explanation: "'Lose' fiili düzensizdir (irregular). Geçmiş zaman hali (V2) 'lost' olur."
  },
  {
    id: 22,
    topic: "Past Simple",
    level: "A2",
    question: "Where _____ you born?",
    options: ["was", "did", "were", "are"],
    answer: "were",
    translation: "Nerede doğdun?",
    explanation: "Doğmak eylemi İngilizce'de pasif/durum yapısında (be born) ifade edilir. 'You' için geçmiş zamanda 'were' kullanılır."
  },
  {
    id: 23,
    topic: "Past Simple",
    level: "A2",
    question: "We _____ to the cinema last weekend, we stayed at home.",
    options: ["didn't go", "don't go", "didn't went", "weren't go"],
    answer: "didn't go",
    translation: "Geçen hafta sonu sinemaya gitmedik, evde kaldık.",
    explanation: "Geçmiş zaman (Past Simple) olumsuz cümlelerinde eylem fiilleri için 'didn't + V1' kullanılır."
  },
  {
    id: 24,
    topic: "Past Simple",
    level: "A2",
    question: "What time _____ the meeting finish on Friday?",
    options: ["do", "did", "was", "does"],
    answer: "did",
    translation: "Cuma günü toplantı saat kaçta bitti?",
    explanation: "Geçmişte eylem belirten (finish) bir soruda yardımcı fiil daima 'did' olur."
  },
  {
    id: 25,
    topic: "Past Simple",
    level: "A2",
    question: "The bed was very uncomfortable. I _____ sleep very well.",
    options: ["didn't", "wasn't", "don't", "couldn't"],
    answer: "didn't",
    translation: "Yatak çok rahatsızdı. Çok iyi uyumadım.",
    explanation: "Geçmişteki bir eylemin (uyumak) olumsuzunu yaparken 'didn't' yardımcı fiiline ihtiyaç duyarız. ('Couldn't' da gramer olarak uysa da, temel Past Simple ünitesinde 'didn't' öne çıkarılır, burada 'didn't' doğru yanıttır)."
  }
];
