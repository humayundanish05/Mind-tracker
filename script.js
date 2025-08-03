// 🎭 Mood Tracker Logic
const moodResponses = {
  "😊": ["خوشی آپ کے اندر سے آتی ہے۔ 😊", "زندگی کے یہ لمحے قیمتی ہیں۔ 🌸", "آپ کی مسکراہٹ روشنی ہے۔ ✨", "خوش رہنا ایک نعمت ہے۔ 🙏"],
  "😡": ["غصے کو محسوس کرنا بھی انسانی بات ہے۔ 😡", "گہری سانس لیں، یہ وقت بھی گزر جائے گا۔ 🌬️", "پُرسکون رہیں، آپ کا سکون اہم ہے۔ 🧘", "غصہ وقتی ہے، آپ کی اصل روشنی ہے۔ 🔥"],
  "😂": ["ہنسی سب سے اچھی دوا ہے۔ 😂", "یہ لمحہ مزے کا ہے! 😆", "آپ کا ہنسنا دل کو خوشی دیتا ہے۔ 🥰", "زندگی میں ہنسی بہت ضروری ہے۔ 🎉"],
  "🥲": ["اداسی کے ساتھ بھی خوبصورتی ہے۔ 🥲", "آپ تنہا نہیں ہیں۔ 🤝", "احساسات کو محسوس کرنا بہادری ہے۔ ❤️‍🔥", "یہ وقت گزر جائے گا۔ 🕰️"],
  "🗿": ["میں خود ہی کافی ہوں، سب کے لیے نہیں، بس اپنے لیے۔ 💯🗿", "میں کم بولتا ہوں، لیکن جب بولتا ہوں تو بات بن جاتی ہے۔ 🤫💥", "میں چھپ رہتا ہوں، لیکن میرا اثر ہر جگہ ہوتا ہے۔ 👻🌊"]
};

function setMood(emoji) {
  const responses = moodResponses[emoji];
  const result = responses?.length > 0
    ? responses[Math.floor(Math.random() * responses.length)]
    : "کوئی پیغام نہیں ملا۔";
  document.getElementById("mood-result").textContent = result;
}

// 💭 Reflection Prompt Logic
const prompts = [
  "آپ اس وقت واقعی کیا محسوس کر رہے ہیں؟",
  "ایسی کون سی چیز ہے جسے آپ مسلسل مؤخر کر رہے ہیں؟",
  "آپ کس کو یاد کرتے ہیں لیکن بتایا نہیں؟",
  "کیا چیز آپ کو زندہ محسوس کرواتی ہے؟"
];

function newPrompt() {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt").textContent = prompt;
}

// 💖 Affirmations Logic
const affirmationList = [
  "آپ کافی ہیں، جیسے ہیں ویسے ہی۔",
  "یہ لمحہ بھی گزر جائے گا۔",
  "آپ اپنی سوچ سے زیادہ مضبوط ہیں۔",
  "کبھی کبھی کھو جانا بھی ٹھیک ہے۔"
];

function showAffirmation() {
  const affirmation = affirmationList[Math.floor(Math.random() * affirmationList.length)];
  document.getElementById("affirmation").textContent = affirmation;
}

// 🧘 Meditation Timer + Breathing Animation
const breathBox = document.getElementById("breath-box");
const breathingTexts = {
  inhale: ["آہستہ سانس لیں...", "گہرائی میں جائیں...", "پُرسکون رہیں..."],
  hold: ["روک کر رکھیں...", "خاموش لمحہ...", "بس ٹھہریں..."],
  exhale: ["آہستہ چھوڑیں...", "پریشانی باہر نکالیں...", "سکون محسوس کریں..."]
};

let timerInterval = null;
let breathingTimeout = null;
let timeLeft = 0;
let breathingPaused = false;

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fadeText(text, phaseClass) {
  breathBox.className = '';
  breathBox.offsetWidth;
  breathBox.textContent = text;
  breathBox.classList.add("fade", phaseClass);
}

function startBreathingCycle() {
  if (!breathBox || breathingPaused) return;
  fadeText(getRandom(breathingTexts.inhale), "phase-inhale");

  breathingTimeout = setTimeout(() => {
    if (breathingPaused) return;
    fadeText(getRandom(breathingTexts.hold), "phase-hold");

    breathingTimeout = setTimeout(() => {
      if (breathingPaused) return;
      fadeText(getRandom(breathingTexts.exhale), "phase-exhale");

      breathingTimeout = setTimeout(startBreathingCycle, 2000);
    }, 2000);
  }, 2000);
}

function updateCountdown() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');
  document.getElementById("countdown").textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  const inputValue = parseInt(document.getElementById("timeInput").value);
  if (isNaN(inputValue) || inputValue <= 0) return;

  clearInterval(timerInterval);
  clearTimeout(breathingTimeout);
  timeLeft = inputValue * 60;
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
  breathBox.textContent = "ٹائمر کا 'شروع' بٹن دبائیں";
  breathBox.className = "";
}
