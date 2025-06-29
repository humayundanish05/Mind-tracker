// Urdu Prompts
const prompts = [
  "آپ اس وقت واقعی کیا محسوس کر رہے ہیں؟",
  "ایسی کون سی چیز ہے جسے آپ مسلسل مؤخر کر رہے ہیں؟",
  "آپ کس کو یاد کرتے ہیں لیکن بتایا نہیں؟",
  "کیا چیز آپ کو زندہ محسوس کرواتی ہے؟",
  "آپ جذباتی طور پر کس چیز سے بچ رہے ہیں؟",
  "آخری بار کب کسی نے آپ کو واقعی سمجھا؟",
  "کون سی یاد آپ کو سکون دیتی ہے؟"
];

// Urdu Secrets
const secrets = [
  "میں اکثر اکیلا روتا ہوں۔",
  "ابھی بھی ماضی کی ایک یاد دل میں ہے۔",
  "میں مضبوط دکھائی دیتا ہوں، مگر اندر سے بکھرا ہوا ہوں۔",
  "مجھے بھول جانے کا خوف ہے۔",
  "میں اکثر پیغامات لکھتا ہوں جو کبھی نہیں بھیجتا۔"
];

// Urdu Affirmations
const affirmations = [
  "آپ کافی ہیں، جیسے ہیں ویسے ہی۔",
  "یہ لمحہ بھی گزر جائے گا۔",
  "آپ اپنی سوچ سے زیادہ مضبوط ہیں۔",
  "کبھی کبھی کھو جانا بھی ٹھیک ہے۔",
  "آپ محبوب ہیں، چاہے آپ کو محسوس نہ ہو۔"
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

// 🧘 Timer Logic
let timerInterval;
let timeLeft = 0;

function startTimer() {
  const input = parseInt(document.getElementById('timeInput').value);
  if (isNaN(input) || input <= 0) return;

  timeLeft = input * 60;
  updateCountdown();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateCountdown();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("⏳ وقت مکمل ہوا! سکون سے سانس لیں۔");
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
}

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('countdown').textContent = `${minutes}:${seconds}`;
}

// 🎵 Volume Control
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioPlayer");
  const slider = document.getElementById("volumeSlider");

  if (audio && slider) {
    audio.volume = parseFloat(slider.value);
    slider.addEventListener("input", function () {
      audio.volume = parseFloat(this.value);
    });
  }

  // 🔘 Dark/Light Mode Toggle
  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode", toggle.checked);
  });

  // 🟦 Scroll Progress Bar
  window.addEventListener("scroll", () => {
    const scrollBar = document.getElementById("scrollBar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollBar.style.width = `${progress}%`;
  });

  // 🔮 Section Animation on Scroll
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
});
