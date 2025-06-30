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

const moodMessages = {
  "😊": "آپ خوش محسوس کر رہے ہیں۔",
  "😡": "آپ غصے میں ہیں۔",
  "😂": "آپ کو بہت ہنسی آ رہی ہے۔",
  "🥲": "آپ اداسی کے ساتھ مسکرا رہے ہیں۔"
};

function setMood(emoji) {
  const message = moodMessages[emoji] || "آپ کا موڈ معلوم نہیں ہو سکا۔";
  document.getElementById('mood-result').textContent = `${emoji} ${message}`;
}

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
  inhale: ["آپ محفوظ ہیں۔", "آپ کافی ہیں جیسے ہیں۔", "روشنی آپ کے اندر ہے۔"],
  hold: ["یہ لمحہ آپ کا ہے۔", "ابھی بس محسوس کریں۔", "خاموشی میں سکون ہے۔"],
  exhale: ["جانے دیں...", "سکون ہے آپ میں۔", "پریشانیاں ہوا کی طرح اڑ رہی ہیں۔"]
};

let timerInterval;
let timeLeft = 0;
let breathingStarted = false;
let breathingPaused = false;
let breathingTimeout = null;

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fadeText(text, phaseClass) {
  box.classList.remove("fade");
  void box.offsetWidth;
  box.textContent = text;
  box.className = `fade ${phaseClass}`;
}

function startBreathingCycle() {
  if (!box || breathingPaused) return;

  const inhaleText = getRandom(affirmations.inhale);
  fadeText(inhaleText, 'phase-inhale');

  breathingTimeout = setTimeout(() => {
    if (breathingPaused) return;

    const holdText = getRandom(affirmations.hold);
    fadeText(holdText, 'phase-hold');

    breathingTimeout = setTimeout(() => {
      if (breathingPaused) return;

      const exhaleText = getRandom(affirmations.exhale);
      fadeText(exhaleText, 'phase-exhale');

      breathingTimeout = setTimeout(startBreathingCycle, 6000);
    }, 4000);
  }, 4000);
}

function startTimer() {
  const input = parseInt(document.getElementById('timeInput').value);
  if (isNaN(input) || input <= 0) return;

  clearInterval(timerInterval);
  clearTimeout(breathingTimeout);
  timeLeft = input * 60;
  updateCountdown();

  breathingPaused = false;
  startBreathingCycle();
  breathingStarted = true;

  timerInterval = setInterval(() => {
    timeLeft--;
    updateCountdown();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      clearTimeout(breathingTimeout);
      breathingPaused = true;
      breathingStarted = false;
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
  breathingStarted = false;
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
