const prompts = [
  "آپ اس وقت واقعی کیا محسوس کر رہے ہیں؟",
  "ایسی کون سی چیز ہے جسے آپ مسلسل مؤخر کر رہے ہیں؟",
  "آپ کس کو یاد کرتے ہیں لیکن بتایا نہیں؟",
  "کیا چیز آپ کو زندہ محسوس کرواتی ہے؟",
  "آپ جذباتی طور پر کس چیز سے بچ رہے ہیں؟",
  "آخری بار کب کسی نے آپ کو واقعی سمجھا؟",
  "کون سی یاد آپ کو سکون دیتی ہے؟",
  "آپ کے دل میں کون سا سوال بار بار آتا ہے؟",
  "کیا آپ نے کبھی خود کو کھویا محسوس کیا؟",
  "کون سی بات آپ کسی کو کہنا چاہتے ہیں لیکن ہمت نہیں کرتے؟",
  "کیا آپ خود کو معاف کر سکے ہیں؟",
  "کون سی عادت آپ کو سب سے زیادہ نقصان پہنچاتی ہے؟",
  "جب آپ اداس ہوتے ہیں تو سب سے پہلے کس کے بارے میں سوچتے ہیں؟",
  "آپ اپنی زندگی میں کس چیز کے لئے سب سے زیادہ شکر گزار ہیں؟",
  "کیا کوئی خواب ہے جو آپ نے ترک کر دیا؟",
  "کون سی چیز آپ کو سب سے زیادہ خوفزدہ کرتی ہے؟",
  "آپ کے اندر چھپی طاقت کیا ہے؟",
  "آپ کب آخری بار دل سے ہنسے تھے؟",
  "کس لمحے نے آپ کی زندگی کا رخ بدل دیا؟",
  "کیا آپ نے کبھی کسی کو بنا الفاظ کے سمجھا ہے؟"
];

// Urdu Secrets
const secrets = [
  "میں اکثر اکیلا روتا ہوں۔",
  "ابھی بھی ماضی کی ایک یاد دل میں ہے۔",
  "میں مضبوط دکھائی دیتا ہوں، مگر اندر سے بکھرا ہوا ہوں۔",
  "مجھے بھول جانے کا خوف ہے۔",
  "میں اکثر پیغامات لکھتا ہوں جو کبھی نہیں بھیجتا۔",
  "میں اپنی اصل فیلنگز چھپاتا ہوں تاکہ دوسروں کو تکلیف نہ ہو۔",
  "مجھے اکثر لگتا ہے جیسے میں کافی نہیں ہوں۔",
  "میں رات کو سونے سے پہلے ہمیشہ ایک ہی بات سوچتا ہوں۔",
  "کبھی کبھی مجھے خود پر یقین نہیں ہوتا۔",
  "میں نے اپنے درد کو ہنسی میں چھپا لیا ہے۔",
  "میں نے کسی سے محبت کی، لیکن اسے کبھی بتایا نہیں۔",
  "مجھے لگتا ہے کوئی بھی مجھے مکمل نہیں سمجھتا۔",
  "میں اکثر اپنی تنہائی دوسروں کے ساتھ ہونے کے باوجود محسوس کرتا ہوں۔",
  "میں نے اپنے خواب قربان کیے تاکہ دوسروں کو خوش رکھ سکوں۔",
  "میں نے کسی کی باتوں سے ٹوٹ کر بھی مسکرا دیا۔",
  "مجھے اپنی خاموشی سے خوف آتا ہے۔",
  "میں اکثر ان لمحات کو یاد کرتا ہوں جو کبھی لوٹ کر نہیں آئیں گے۔",
  "میں چاہتا ہوں کوئی میرے بغیر کہے سب کچھ سمجھ جائے۔",
  "میری آنکھیں کہتی ہیں جو زبان نہیں کہہ پاتی۔",
  "میں اکثر آئینے سے نظریں چراتا ہوں۔"
];

// Urdu Affirmations
const affirmations = [
  "آپ کافی ہیں، جیسے ہیں ویسے ہی۔",
  "یہ لمحہ بھی گزر جائے گا۔",
  "آپ اپنی سوچ سے زیادہ مضبوط ہیں۔",
  "کبھی کبھی کھو جانا بھی ٹھیک ہے۔",
  "آپ محبوب ہیں، چاہے آپ کو محسوس نہ ہو۔",
  "آپ کی موجودگی اہم ہے۔",
  "آپ کی کوششیں معنی رکھتی ہیں۔",
  "ہر دن ایک نیا آغاز ہے۔",
  "آپ کو اپنی رفتار پر چلنے کا حق ہے۔",
  "آپ کے جذبات اہم ہیں۔",
  "آپ وہ سب کچھ پا سکتے ہیں جس کا خواب دیکھتے ہیں۔",
  "خاموشی میں بھی طاقت ہوتی ہے۔",
  "آپ کا ماضی آپ کی پہچان نہیں ہے۔",
  "خود سے محبت کرنا پہلا قدم ہے۔",
  "زندگی ہر دن بہتر ہونے کا موقع دیتی ہے۔",
  "آپ کی روشنی کسی اور کی چمک کم نہیں کرتی۔",
  "آپ کے اندر بے پناہ صلاحیت چھپی ہے۔",
  "آج کا دن بہتر فیصلے لانے کا دن ہے۔",
  "آپ زندگی میں معنی رکھتے ہیں۔",
  "آپ میں روشنی ہے، کبھی مدھم نہ ہونے دیں۔"
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

  clearInterval(timerInterval); // ✅ Fixed: stop old timer first
  timeLeft = input * 60;
  updateCountdown();

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

// 🎵 Volume Control + Other Initializers
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

