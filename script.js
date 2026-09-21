// Durum Değişkenleri
let seciliKonular = new Set();
let aktifSoru = null;
let istatistik = { toplam: 0, dogru: 0, yanlis: 0 };
let agirliklar = JSON.parse(localStorage.getItem("gramerAgirliklari")) || {};

window.onload = () => {
  // İlk çalıştırmada listedeki ilk konuyu varsayılan olarak seç
  const ilkKonu = grammarPool[0].topic;
  seciliKonular.add(ilkKonu);
  
  menuyuOlustur();
  yeniSoruGetir();
};

// Menüyü havuzdaki konulara göre dinamik oluşturur
function menuyuOlustur() {
  const container = document.getElementById("topic-container");
  container.innerHTML = "";

  // Havuzdaki tüm benzersiz konuları çıkar
  const benzersizKonular = [...new Set(grammarPool.map(q => q.topic))];

  benzersizKonular.forEach(konu => {
    const row = document.createElement("div");
    row.className = "topic-row";

    // 1. Çoklu seçim için Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = seciliKonular.has(konu);
    checkbox.onclick = (e) => {
      e.stopPropagation();
      konuToggle(konu, checkbox.checked);
    };

    // 2. Solo mod için Başlık
    const span = document.createElement("span");
    span.className = "topic-title";
    span.innerText = konu;
    if (seciliKonular.size === 1 && seciliKonular.has(konu)) {
      span.classList.add("active-solo");
    }
    span.onclick = () => soloKonuSec(konu);

    row.appendChild(checkbox);
    row.appendChild(span);
    container.appendChild(row);
  });
}

// Konu ismine tıklandığında: Solo Mod (Sadece o konu)
function soloKonuSec(konu) {
  seciliKonular.clear();
  seciliKonular.add(konu);
  menuyuOlustur();
  yeniSoruGetir();
}

// Kutucuk tıklandığında: Karma Mod (Havuza ekle/çıkar)
function konuToggle(konu, isChecked) {
  if (isChecked) {
    seciliKonular.add(konu);
  } else {
    seciliKonular.delete(konu);
    if (seciliKonular.size === 0) seciliKonular.add(konu); // Boş kalmasın
  }
  menuyuOlustur();
  yeniSoruGetir();
}

// Seçili konulara uyan soruları süzer
function getAktifHavuz() {
  return grammarPool.filter(q => seciliKonular.has(q.topic));
}

// Spaced Repetition / Hatalara göre ağırlıklı soru seçimi
function agirlikliSoruSec(havuz) {
  let toplamAgirlik = 0;
  havuz.forEach(q => {
    let w = agirliklar[q.id] || 10;
    toplamAgirlik += w;
  });

  let rnd = Math.random() * toplamAgirlik;
  for (let q of havuz) {
    let w = agirliklar[q.id] || 10;
    if (rnd < w) return q;
    rnd -= w;
  }
  return havuz[0];
}

// Yeni soruyu ekrana hazırlar
function yeniSoruGetir() {
  const havuz = getAktifHavuz();
  if (havuz.length === 0) return;

  aktifSoru = agirlikliSoruSec(havuz);

  // Kart meta bilgileri
  document.getElementById("badge-level").innerText = aktifSoru.level;
  document.getElementById("badge-topic").innerText = aktifSoru.topic;
  document.getElementById("question-text").innerText = aktifSoru.question;

  // Geri bildirim kutusunu ve çeviriyi sıfırla
  const feedbackCard = document.getElementById("feedback-card");
  const translationText = document.getElementById("translation-text");
  const toggleBtn = document.getElementById("toggle-trans-btn");
  const nextBtn = document.getElementById("next-button");

  feedbackCard.classList.add("hidden");
  translationText.classList.add("hidden");
  translationText.innerText = aktifSoru.translation;
  toggleBtn.innerText = "🇹🇷 Türkçe Çeviriyi Göster";
  nextBtn.classList.add("hidden");

  // Şıkları karıştırıp render et
  const optionsBox = document.getElementById("options-box");
  optionsBox.innerHTML = "";
  const karisikSecenekler = [...aktifSoru.options].sort(() => Math.random() - 0.5);

  karisikSecenekler.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.innerText = opt;
    btn.onclick = () => cevapVer(btn, opt);
    optionsBox.appendChild(btn);
  });
}

// Şıkka tıklandığında çalışır
function cevapVer(secilenButon, secilenMetin) {
  const tumButonlar = document.querySelectorAll(".opt-btn");
  tumButonlar.forEach(b => b.disabled = true);

  istatistik.toplam++;
  let currentW = agirliklar[aktifSoru.id] || 10;

  if (secilenMetin === aktifSoru.answer) {
    secilenButon.classList.add("correct");
    istatistik.dogru++;
    agirliklar[aktifSoru.id] = Math.max(1, currentW - 3);
  } else {
    secilenButon.classList.add("wrong");
    istatistik.yanlis++;
    agirliklar[aktifSoru.id] = currentW + 5;
    // Doğru olan şıkkı yeşille göster
    tumButonlar.forEach(b => {
      if (b.innerText === aktifSoru.answer) b.classList.add("correct");
    });
  }

  localStorage.setItem("gramerAgirliklari", JSON.stringify(agirliklar));
  istatistikGuncelle();

  // Öğretici açıklamayı göster
  document.getElementById("explanation-text").innerText = aktifSoru.explanation;
  document.getElementById("feedback-card").classList.remove("hidden");
  document.getElementById("next-button").classList.remove("hidden");
}

function toggleTranslation() {
  const transBox = document.getElementById("translation-text");
  const btn = document.getElementById("toggle-trans-btn");

  if (transBox.classList.contains("hidden")) {
    transBox.classList.remove("hidden");
    btn.innerText = "Gizle";
  } else {
    transBox.classList.add("hidden");
    btn.innerText = "🇹🇷 Türkçe Çeviriyi Göster";
  }
}

function istatistikGuncelle() {
  document.getElementById("stat-total").innerText = istatistik.toplam;
  document.getElementById("stat-correct").innerText = istatistik.dogru;
  document.getElementById("stat-wrong").innerText = istatistik.yanlis;
}

function sonrakiSoruyaGec() {
  yeniSoruGetir();
}
