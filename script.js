// 💭 Urdu Reflection Prompts
const prompts = [
  "اس لمحے تم حقیقتاً کیا محسوس کر رہے ہو؟",
  "کون سا کام ہے جو تم بار بار ٹالتے جا رہے ہو؟",
  "کون ہے جسے تم یاد کرتے ہو، مگر کبھی بتایا نہیں؟",
  "زندگی کا احساس تمہیں کب اور کیسے ہوتا ہے؟",
  "ایسا کیا ہے جس سے تم جذباتی طور پر نظریں چرا رہے ہو؟",
  "آخری بار کب کسی نے تمہیں دل سے سمجھا تھا؟",
  "کون سی یاد تمہیں سکون دیتی ہے؟"
];

// 🔐 Urdu Secrets
const secrets = [
  "میں اکثر چپکے سے روتا ہوں جب کوئی آس پاس نہیں ہوتا۔",
  "میں اب بھی برسوں پرانی کسی شخصیت کے بارے میں سوچتا ہوں۔",
  "میں مضبوط دکھائی دیتا ہوں، مگر اندر سے کھویا ہوا ہوں۔",
  "مجھے یہ ڈر ہے کہ لوگ مجھے بھول جائیں گے۔",
  "میں وہ پیغامات لکھتا ہوں جو کبھی بھیجتا نہیں۔"
];

// 💖 Urdu Affirmations
const affirmations = [
  "تم کافی ہو، جیسے ہو ویسے مکمل ہو۔",
  "یہ لمحہ بھی گزر جائے گا۔",
  "تم اپنی سوچ سے کہیں زیادہ مضبوط ہو۔",
  "کبھی کبھی کھو جانا بھی ٹھیک ہوتا ہے۔",
  "تمہیں چاہا جاتا ہے، چاہے تمہیں ایسا محسوس نہ ہو۔"
];

// 🎭 Mood Set
function setMood(emoji) {
  document.getElementById('mood-result').textContent = `آپ کا موجودہ موڈ: ${emoji}`;
}

// 💭 Random Reflection Prompt
function newPrompt() {
  const random = prompts[Math.floor(Math.random() * prompts.length)];
  const promptElement = document.getElementById('prompt');
  promptElement.textContent = random;
  promptElement.setAttribute("dir", "rtl");
  promptElement.style.textAlign = "right";
}

// 🔐 Secret Sharing
function sendSecret() {
  const userSecret = document.getElementById('userSecret').value.trim();
  const random = secrets[Math.floor(Math.random() * secrets.length)];
  const output = document.getElementById('randomSecret');
  output.setAttribute("dir", "rtl");
  output.style.textAlign = "right";
  output.textContent = userSecret ? `خاموش خلا سے ایک راز: “${random}”` : '';
}

// 💖 Affirmation Generator
function showAffirmation() {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  const output = document.getElementById('affirmation');
  output.setAttribute("dir", "rtl");
  output.style.textAlign = "right";
  output.textContent = random;
}

// 📝 Journal Save
function saveJournal() {
  const content = document.getElementById('journalBox').value;
  localStorage.setItem('innerverseJournal', content);
  const status = document.getElementById('saveStatus');
  status.textContent = 'جرنل کامیابی سے محفوظ ہو گیا ہے۔';
  status.setAttribute("dir", "rtl");
  status.style.textAlign = "right";
}

// 🧘 Meditation Timer Logic
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
      alert("⏳ وقت ختم ہو گیا! اب سکون سے سانس لو۔");
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

// 🎵 Music Track Change
function changeTrack(url) {
  const player = document.getElementById("audioPlayer");
  if (url) {
    player.src = url;
    player.play();
  }
}

// 🎚 Volume Slider
window.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audioPlayer");
  const slider = document.getElementById("volumeSlider");

  if (audio && slider) {
    audio.volume = parseFloat(slider.value);
    slider.addEventListener("input", function () {
      audio.volume = parseFloat(this.value);
    });
  }
});
