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
const secrets = [
  "میں اکثر اکیلا روتا ہوں۔",
  "ابھی بھی ماضی کی ایک یاد دل میں ہے۔",
  "میں مضبوط دکھائی دیتا ہوں، مگر اندر سے بکھرا ہوا ہوں۔",
  "مجھے بھول جانے کا خوف ہے۔"
];
const affirmations = [
  "آپ کافی ہیں، جیسے ہیں ویسے ہی۔",
  "یہ لمحہ بھی گزر جائے گا۔",
  "آپ اپنی سوچ سے زیادہ مضبوط ہیں۔",
  "کبھی کبھی کھو جانا بھی ٹھیک ہے۔"
];

function setMood(emoji) {
  document.getElementById('mood-result').textContent = `آپ کا موڈ: ${emoji}`;
}

function newPrompt() {
  const random = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById('prompt').textContent = random;
}

function sendSecret() {
  const userSecret = document.getElementById('userSecret').value.trim();
  const random = secrets[Math.floor(Math.random() * secrets.length)];
  document.getElementById('randomSecret').textContent = userSecret ? `راز کی دنیا سے: “${random}”` : '';
}

function showAffirmation() {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById('affirmation').textContent = random;
}

function saveJournal() {
  const content = document.getElementById('journalBox').value;
  localStorage.setItem('innerverseJournal', content);
  document.getElementById('saveStatus').textContent = 'جرنل مقامی طور پر محفوظ ہوگیا ہے۔';
}

// 🧘 Timer + Breathing Cycle

let timerInterval;
let timeLeft = 0;
let breathingStarted = false;

const affirmations = {
  inhale: ["آپ محفوظ ہیں۔", "آپ کافی ہیں جیسے ہیں۔", "روشنی آپ کے اندر ہے۔"],
  hold: ["یہ لمحہ آپ کا ہے۔", "ابھی بس محسوس کریں۔", "خاموشی میں سکون ہے۔"],
  exhale: ["جانے دیں...", "سکون ہے آپ میں۔", "پریشانیاں ہوا کی طرح اڑ رہی ہیں۔"]
};

const box = document.getElementById("breath-box");

function startBreathingCycle() {
  if (!box) return;

  const inhaleText = affirmations.inhale[Math.floor(Math.random() * affirmations.inhale.length)];
  box.textContent = inhaleText;
  box.className = 'phase-inhale';

  setTimeout(() => {
    const holdText = affirmations.hold[Math.floor(Math.random() * affirmations.hold.length)];
    box.textContent = holdText;
    box.className = 'phase-hold';

    setTimeout(() => {
      const exhaleText = affirmations.exhale[Math.floor(Math.random() * affirmations.exhale.length)];
      box.textContent = exhaleText;
      box.className = 'phase-exhale';

      setTimeout(startBreathingCycle, 6000);
    }, 4000);
  }, 4000);
}

function startTimer() {
  const input = parseInt(document.getElementById('timeInput').value);
  if (isNaN(input) || input <= 0) return;

  clearInterval(timerInterval);
  timeLeft = input * 60;
  updateCountdown();

  if (!breathingStarted) {
    breathingStarted = true;
    startBreathingCycle();
  }

  timerInterval = setInterval(() => {
    timeLeft--;
    updateCountdown();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("⏳ وقت مکمل ہوا! سکون سے سانس لیں۔");
      breathingStarted = false;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 0;
  updateCountdown();
  breathingStarted = false;
}

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('countdown').textContent = `${minutes}:${seconds}`;
}
// 🎵 Volume Control + Initializations
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioPlayer");
  const slider = document.getElementById("volumeSlider");

  if (audio && slider) {
    audio.volume = parseFloat(slider.value);
    slider.addEventListener("input", function () {
      audio.volume = parseFloat(this.value);
    });
  }

  // 🌙 Light/Dark Mode Toggle
  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode", toggle.checked);
  });

  // 📈 Scroll Progress Bar
  window.addEventListener("scroll", () => {
    const scrollBar = document.getElementById("scrollBar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollBar.style.width = `${progress}%`;
  });

  // 🔮 Scroll Animations
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

  // 🌈 Button Glow with Random Color
  function getRandomGlowColor() {
    const colors = [
      'rgba(255, 99, 132, 0.8)',   // pink
      'rgba(54, 162, 235, 0.8)',   // blue
      'rgba(255, 206, 86, 0.8)',   // yellow
      'rgba(75, 192, 192, 0.8)',   // aqua
      'rgba(153, 102, 255, 0.8)',  // purple
      'rgba(255, 159, 64, 0.8)',   // orange
      'rgba(0, 255, 140, 0.8)'     // green
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

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
});
