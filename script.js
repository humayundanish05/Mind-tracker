// 💬 Urdu Prompts
const prompts = [
  "آپ اس وقت واقعی کیا محسوس کر رہے ہیں؟",
  "ایسی کون سی چیز ہے جسے آپ مسلسل مؤخر کر رہے ہیں؟",
  "آپ کس کو یاد کرتے ہیں لیکن بتایا نہیں؟",
  "کیا چیز آپ کو زندہ محسوس کرواتی ہے؟",
  "آپ جذباتی طور پر کس چیز سے بچ رہے ہیں؟",
  "آخری بار کب کسی نے آپ کو واقعی سمجھا؟",
  "کون سی یاد آپ کو سکون دیتی ہے؟"
];

const affirmationList = [
  "آپ کافی ہیں، جیسے ہیں ویسے ہی۔",
  "یہ لمحہ بھی گزر جائے گا۔",
  "آپ اپنی سوچ سے زیادہ مضبوط ہیں۔",
  "کبھی کبھی کھو جانا بھی ٹھیک ہے۔"
];

// ✨ Mood-based Affirmations (20 per emoji)
const moodResponses = {
  "😊": [
    "خوشی آپ کے اندر سے آتی ہے۔", "زندگی کے یہ لمحے قیمتی ہیں۔", "آپ کی مسکراہٹ روشنی ہے۔",
    "خوش رہنا ایک نعمت ہے۔", "آپ کا دل روشنی سے بھرا ہے۔", "یہ دن خوبصورت ہے، جیسے آپ۔",
    "مسکراہٹ دل جیت لیتی ہے۔", "آپ کا چہرہ روشنی بکھیر رہا ہے۔", "پُرسکون لمحے آپ کے لیے ہیں۔",
    "ہر خوش لمحہ قیمتی ہے۔", "خود سے محبت بھی خوشی ہے۔", "خوشی چھوٹی باتوں میں چھپی ہوتی ہے۔",
    "آپ کی خوشی دوسروں کو بھی متاثر کرتی ہے۔", "خوش رہنا بہادری ہے۔", "آپ مثبت توانائی ہیں۔",
    "زندگی کی روشنی آپ کے ساتھ ہے۔", "خوشی کا انتخاب ایک طاقت ہے۔", "آپ کا سکون قابل قدر ہے۔",
    "خوش لمحوں کا شکریہ ادا کریں۔", "آپ روشنی کے قابل ہیں۔"
  ],
  "😡": [
    "غصے کو محسوس کرنا بھی انسانی بات ہے۔", "گہری سانس لیں، یہ وقت بھی گزر جائے گا۔", "پُرسکون رہیں، آپ کا سکون اہم ہے۔",
    "غصہ وقتی ہے، آپ کی اصل روشنی ہے۔", "خاموشی میں طاقت ہے۔", "ہر جذبات کے پیچھے ایک کہانی ہے۔",
    "خود کو سنبھالنا بہادری ہے۔", "پانی پی لیں، خود پر مہربان رہیں۔", "آپ کی پرسکون فطرت لوٹ آئے گی۔",
    "چند لمحے خاموشی بہت کچھ بدل سکتے ہیں۔", "یہ وقت بھی گزر جائے گا۔", "خود کو سنبھالنا سب سے بڑی جیت ہے۔",
    "آپ کے جذبات آپ کی طاقت ہیں۔", "ہر طوفان کے بعد سکون ہوتا ہے۔", "صبر کی طاقت آپ میں ہے۔",
    "آپ کنٹرول میں ہیں۔", "دل کو تھوڑا وقت دیں۔", "غمزده لمحوں میں نرمی ضروری ہے۔",
    "آپ کی امن پسندی قیمتی ہے۔", "روشنی آپ کی فطرت میں ہے۔"
  ],
  "😂": [
    "ہنسی سب سے اچھی دوا ہے۔", "یہ لمحہ مزے کا ہے!", "آپ کا ہنسنا دل کو خوشی دیتا ہے۔",
    "زندگی میں ہنسی بہت ضروری ہے۔", "آپ کی ہنسی میں جادو ہے۔", "مسکرائیں، یہ آپ پر جچتا ہے۔",
    "خوشیاں بانٹنے کا وقت ہے۔", "ہر قہقہہ زندگی کا تحفہ ہے۔", "آپ کی خوشی قدرتی ہے۔",
    "خود پر ہنسنا آزادی ہے۔", "ہنسی سے دل ہلکا ہوتا ہے۔", "دل سے ہنسنا روح کی غذا ہے۔",
    "ہنسی کا مطلب ہے آپ زندہ ہیں۔", "یہ لمحے یادگار ہیں۔", "آپ کا ہنسنا اردگرد کو روشن کرتا ہے۔",
    "خود کو خوش دیکھنا سب سے حسین منظر ہے۔", "زندگی ایک خوبصورت مذاق بھی ہے۔", "قہقہے محبت کے نشان ہیں۔",
    "خوشی contagious ہوتی ہے، بانٹیں۔", "ہنسی کے پیچھے چھپی سچائی کو محسوس کریں۔"
  ],
  "🥲": [
    "اداسی کے ساتھ بھی خوبصورتی ہے۔", "آپ تنہا نہیں ہیں۔", "احساسات کو محسوس کرنا بہادری ہے۔",
    "یہ وقت گزر جائے گا۔", "آپ کو محسوس کرنے کی اجازت ہے۔", "اداسی بھی زندگی کا حصہ ہے۔",
    "خاموشی بھی اظہار ہے۔", "ہر آنکھ کے پیچھے ایک کہانی ہے۔", "دل کو محسوس کرنے دیں۔",
    "پریشانی میں بھی ایک روشنی چھپی ہوتی ہے۔", "آنسو کمزوری نہیں، طاقت کی نشانی ہیں۔",
    "خود پر مہربان رہیں۔", "یہ ٹھیک ہے کہ آپ ٹھیک نہ ہوں۔", "آپ ہر دن بہتر ہو رہے ہیں۔",
    "دکھ کے پیچھے بھی محبت ہے۔", "احساس کرنے والے دل نایاب ہوتے ہیں۔", "آپ کی گہرائی قیمتی ہے۔",
    "آپ کی خاموشی چیخ چیخ کر بول رہی ہے۔", "یہ لمحات گزر جائیں گے۔", "روشنی کی طرف لوٹنا ممکن ہے۔"
  ]
};

// 👇 Updated function for mood setting
function setMood(emoji) {
  const responses = moodResponses[emoji];
  const message = responses
    ? responses[Math.floor(Math.random() * responses.length)]
    : "آپ کا موڈ معلوم نہیں ہو سکا۔";
  document.getElementById('mood-result').textContent = `${emoji} ${message}`;
}

// Prompts and affirmations (unchanged)
function newPrompt() {
  const random = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById('prompt').textContent = random;
}

function showAffirmation() {
  const random = affirmationList[Math.floor(Math.random() * affirmationList.length)];
  document.getElementById('affirmation').textContent = random;
}

// 🧘 Breathing Timer Logic
const box = document.getElementById("breath-box");

const affirmations = {
  inhale: [
    "آپ محفوظ ہیں۔",
    "آپ کافی ہیں جیسے ہیں۔",
    "روشنی آپ کے اندر ہے۔",
    "ہر سانس زندگی کی نعمت ہے۔",
    "آپ پیار کے قابل ہیں۔",
    "آپ روشنی کا مرکز ہیں۔",
    "آپ مکمل ہیں۔",
    "آپ شکر گزار دل رکھتے ہیں۔",
    "آپ اندر سے پر سکون ہیں۔",
    "آپ میں طاقت ہے۔"
  ],
  hold: [
    "یہ لمحہ آپ کا ہے۔",
    "ابھی بس محسوس کریں۔",
    "خاموشی میں سکون ہے۔",
    "وقت رک گیا ہے، صرف آپ ہیں۔",
    "دل کی دھڑکن سنیں۔",
    "یہی لمحہ کافی ہے۔",
    "سانس کے بیچ زندگی ہے۔",
    "خود کو گلے لگائیں۔",
    "آپ توجہ کے قابل ہیں۔",
    "یہ لمحہ مقدس ہے۔"
  ],
  exhale: [
    "جانے دیں...",
    "سکون ہے آپ میں۔",
    "پریشانیاں ہوا کی طرح اڑ رہی ہیں۔",
    "غم ہوا میں گھل رہا ہے۔",
    "تھکن کو آزاد کریں۔",
    "تناؤ کو چھوڑ دیں۔",
    "ہر سانس کے ساتھ نرمی آئے۔",
    "ہر فکر کو بہنے دیں۔",
    "روشنی کو پھیلنے دیں۔",
    "خود کو آزاد کریں۔"
  ]
};

let timerInterval;
let timeLeft = 0;
let breathingPaused = false;
let breathingTimeout = null;

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fadeText(text, phaseClass) {
  box.classList.remove("phase-inhale", "phase-hold", "phase-exhale");
  box.classList.remove("fade");
  void box.offsetWidth; // force reflow
  box.classList.add("fade");
  box.textContent = text;

  setTimeout(() => {
    box.classList.add(phaseClass);
  }, 50);
}

function startBreathingCycle() {
  if (!box || breathingPaused) return;

  fadeText(getRandom(affirmations.inhale), 'phase-inhale');

  breathingTimeout = setTimeout(() => {
    if (breathingPaused) return;

    fadeText(getRandom(affirmations.hold), 'phase-hold');

    breathingTimeout = setTimeout(() => {
      if (breathingPaused) return;

      fadeText(getRandom(affirmations.exhale), 'phase-exhale');

      breathingTimeout = setTimeout(startBreathingCycle, 2000);
    }, 2000);
  }, 2000);
}

function startTimer() {
  const input = parseInt(document.getElementById('timeInput').value);
  if (isNaN(input) || input <= 0) return;

  clearInterval(timerInterval);
  clearTimeout(breathingTimeout);
  timeLeft = input * 60;
  breathingPaused = false;
  updateCountdown();
  startBreathingCycle();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateCountdown();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      clearTimeout(breathingTimeout);
      breathingPaused = true;
      alert("⏳ وقت مکمل ہوا! سکون سے سانس لیں۔");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  clearTimeout(breathingTimeout);
  breathingPaused = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  clearTimeout(breathingTimeout);
  timeLeft = 0;
  breathingPaused = true;
  updateCountdown();
  box.textContent = "ٹائمر شروع کریں";
  box.className = '';
}

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('countdown').textContent = `${minutes}:${seconds}`;
}

// 🌐 UI Events Setup
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioPlayer");
  const slider = document.getElementById("volumeSlider");

  if (audio && slider) {
    audio.volume = parseFloat(slider.value);
    slider.addEventListener("input", function () {
      audio.volume = parseFloat(this.value);
    });
  }

  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode", toggle.checked);
  });

  window.addEventListener("scroll", () => {
    const scrollBar = document.getElementById("scrollBar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollBar.style.width = `${progress}%`;
  });

  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0.1s";
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  const allButtons = document.querySelectorAll("button");
  allButtons.forEach(btn => {
    if (btn.closest("#audioPlayer")) return;

    btn.addEventListener("click", () => {
      const color = getRandomGlowColor();
      btn.classList.remove("active-glow");
      void btn.offsetWidth;
      btn.style.boxShadow = `0 0 25px 10px ${color}`;
      btn.classList.add("active-glow");

      setTimeout(() => {
        btn.classList.remove("active-glow");
        btn.style.boxShadow = `0 0 10px ${color}`;
      }, 1600);
    });
  });

  function getRandomGlowColor() {
    const colors = [
      'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)',
      'rgba(0, 255, 140, 0.8)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
});
