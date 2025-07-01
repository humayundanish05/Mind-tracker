// ✅ Mood Responses (no duplication)
const moodResponses = {
  "😊": [
    "خوشی آپ کے اندر سے آتی ہے۔ 😊", "زندگی کے یہ لمحے قیمتی ہیں۔ 🌸", "آپ کی مسکراہٹ روشنی ہے۔ ✨",
    "خوش رہنا ایک نعمت ہے۔ 🙏", "آپ کا دل روشنی سے بھرا ہے۔ 💖", "یہ دن خوبصورت ہے، جیسے آپ۔ 🌞",
    "مسکراہٹ دل جیت لیتی ہے۔ 😊", "آپ کا چہرہ روشنی بکھیر رہا ہے۔ 🌟", "پُرسکون لمحے آپ کے لیے ہیں۔ 😌",
    "ہر خوش لمحہ قیمتی ہے۔ 💫", "خود سے محبت بھی خوشی ہے۔ 💕", "خوشی چھوٹی باتوں میں چھپی ہوتی ہے۔ 🌷",
    "آپ کی خوشی دوسروں کو بھی متاثر کرتی ہے۔ 😄", "خوش رہنا بہادری ہے۔ 💪", "آپ مثبت توانائی ہیں۔ 🔆",
    "زندگی کی روشنی آپ کے ساتھ ہے۔ 🌈", "خوشی کا انتخاب ایک طاقت ہے۔ ✨", "آپ کا سکون قابل قدر ہے۔ 🌿",
    "خوش لمحوں کا شکریہ ادا کریں۔ 🤲", "آپ روشنی کے قابل ہیں۔ 🌟"
  ],
  "😡": [
    "غصے کو محسوس کرنا بھی انسانی بات ہے۔ 😡", "گہری سانس لیں، یہ وقت بھی گزر جائے گا۔ 🌬️", "پُرسکون رہیں، آپ کا سکون اہم ہے۔ 🧘",
    "غصہ وقتی ہے، آپ کی اصل روشنی ہے۔ 🔥", "خاموشی میں طاقت ہے۔ 🤐", "ہر جذبات کے پیچھے ایک کہانی ہے۔ 📖",
    "خود کو سنبھالنا بہادری ہے۔ 🛡️", "پانی پی لیں، خود پر مہربان رہیں۔ 💧", "آپ کی پرسکون فطرت لوٹ آئے گی۔ 🌿",
    "چند لمحے خاموشی بہت کچھ بدل سکتے ہیں۔ ⏳", "یہ وقت بھی گزر جائے گا۔ 📆", "خود کو سنبھالنا سب سے بڑی جیت ہے۔ 🏆",
    "آپ کے جذبات آپ کی طاقت ہیں۔ 💥", "ہر طوفان کے بعد سکون ہوتا ہے۔ 🌤️", "صبر کی طاقت آپ میں ہے۔ 🕊️",
    "آپ کنٹرول میں ہیں۔ 🎛️", "دل کو تھوڑا وقت دیں۔ ❤️", "غمزدہ لمحوں میں نرمی ضروری ہے۔ 🍃",
    "آپ کی امن پسندی قیمتی ہے۔ ☮️", "روشنی آپ کی فطرت میں ہے۔ ✨"
  ],
  "😂": [
    "ہنسی سب سے اچھی دوا ہے۔ 😂", "یہ لمحہ مزے کا ہے! 😆", "آپ کا ہنسنا دل کو خوشی دیتا ہے۔ 🥰",
    "زندگی میں ہنسی بہت ضروری ہے۔ 🎉", "آپ کی ہنسی میں جادو ہے۔ ✨", "مسکرائیں، یہ آپ پر جچتا ہے۔ 😄",
    "خوشیاں بانٹنے کا وقت ہے۔ 🤗", "ہر قہقہہ زندگی کا تحفہ ہے۔ 🎁", "آپ کی خوشی قدرتی ہے۔ 🌈",
    "خود پر ہنسنا آزادی ہے۔ 🕊️", "ہنسی سے دل ہلکا ہوتا ہے۔ 🍃", "دل سے ہنسنا روح کی غذا ہے۔ 😍",
    "ہنسی کا مطلب ہے آپ زندہ ہیں۔ ❤️", "یہ لمحے یادگار ہیں۔ 📸", "آپ کا ہنسنا اردگرد کو روشن کرتا ہے۔ 🔆",
    "خود کو خوش دیکھنا سب سے حسین منظر ہے۔ 🖼️", "زندگی ایک خوبصورت مذاق بھی ہے۔ 😋", "قہقہے محبت کے نشان ہیں۔ 💓",
    "خوشی contagious ہوتی ہے، بانٹیں۔ 🫂", "ہنسی کے پیچھے چھپی سچائی کو محسوس کریں۔ 🔍"
  ],
  "🥲": [
    "اداسی کے ساتھ بھی خوبصورتی ہے۔ 🥲", "آپ تنہا نہیں ہیں۔ 🤝", "احساسات کو محسوس کرنا بہادری ہے۔ ❤️‍🔥",
    "یہ وقت گزر جائے گا۔ 🕰️", "آپ کو محسوس کرنے کی اجازت ہے۔ 🌧️", "اداسی بھی زندگی کا حصہ ہے۔ 🧩",
    "خاموشی بھی اظہار ہے۔ 🤫", "ہر آنکھ کے پیچھے ایک کہانی ہے۔ 👁️", "دل کو محسوس کرنے دیں۔ 💓",
    "پریشانی میں بھی ایک روشنی چھپی ہوتی ہے۔ 🕯️", "آنسو کمزوری نہیں، طاقت کی نشانی ہیں۔ 💧", "خود پر مہربان رہیں۔ 🧸",
    "یہ ٹھیک ہے کہ آپ ٹھیک نہ ہوں۔ 🌧️", "آپ ہر دن بہتر ہو رہے ہیں۔ 🌤️", "دکھ کے پیچھے بھی محبت ہے۔ 💘",
    "احساس کرنے والے دل نایاب ہوتے ہیں۔ 💎", "آپ کی گہرائی قیمتی ہے۔ 🌊", "آپ کی خاموشی چیخ چیخ کر بول رہی ہے۔ 📣",
    "یہ لمحات گزر جائیں گے۔ 🪷", "روشنی کی طرف لوٹنا ممکن ہے۔ 🌈"
  ]
};

function setMood(emoji) {
  const responses = moodResponses[emoji];
  const result = responses?.length
    ? responses[Math.floor(Math.random() * responses.length)]
    : `${emoji} آپ کا موڈ معلوم نہیں ہو سکا۔`;
  document.getElementById('mood-result').textContent = result;
}

// 🧠 Reflection Prompts
const prompts = [
  "آپ اس وقت واقعی کیا محسوس کر رہے ہیں؟", "ایسی کون سی چیز ہے جسے آپ مسلسل مؤخر کر رہے ہیں؟",
  "آپ کس کو یاد کرتے ہیں لیکن بتایا نہیں؟", "کیا چیز آپ کو زندہ محسوس کرواتی ہے؟",
  "آپ جذباتی طور پر کس چیز سے بچ رہے ہیں؟", "آخری بار کب کسی نے آپ کو واقعی سمجھا؟",
  "کون سی یاد آپ کو سکون دیتی ہے؟"
];

function newPrompt() {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt").textContent = prompt;
}

// 💖 Affirmations
const affirmationList = [
  "آپ کافی ہیں، جیسے ہیں ویسے ہی۔", "یہ لمحہ بھی گزر جائے گا۔",
  "آپ اپنی سوچ سے زیادہ مضبوط ہیں۔", "کبھی کبھی کھو جانا بھی ٹھیک ہے۔"
];

function showAffirmation() {
  const affirmation = affirmationList[Math.floor(Math.random() * affirmationList.length)];
  document.getElementById("affirmation").textContent = affirmation;
}

// 🧘 Breathing Logic
const box = document.getElementById("breath-box");
const affirmations = {
  inhale: [
    "آپ محفوظ ہیں۔", "آپ کافی ہیں جیسے ہیں۔", "روشنی آپ کے اندر ہے۔",
    "ہر سانس زندگی کی نعمت ہے۔", "آپ پیار کے قابل ہیں۔", "آپ مکمل ہیں۔"
  ],
  hold: [
    "یہ لمحہ آپ کا ہے۔", "ابھی بس محسوس کریں۔", "خاموشی میں سکون ہے۔", "وقت رک گیا ہے، صرف آپ ہیں۔"
  ],
  exhale: [
    "جانے دیں...", "سکون ہے آپ میں۔", "پریشانیاں ہوا کی طرح اڑ رہی ہیں۔", "خود کو آزاد کریں۔"
  ]
};

let timerInterval, breathingTimeout, timeLeft = 0, breathingPaused = false;

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fadeText(text, phaseClass) {
  box.className = ''; // reset all classes
  box.offsetWidth; // force reflow
  box.textContent = text;
  box.classList.add("fade", phaseClass);
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
  const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const sec = String(timeLeft % 60).padStart(2, '0');
  document.getElementById('countdown').textContent = `${min}:${sec}`;
}

// 🌐 UI Setup
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const volumeSlider = document.getElementById("volumeSlider");

  if (audio && volumeSlider) {
    audio.volume = parseFloat(volumeSlider.value);
    volumeSlider.addEventListener("input", () => {
      audio.volume = parseFloat(volumeSlider.value);
    });
  }

  document.getElementById("modeToggle").addEventListener("change", (e) => {
    document.body.classList.toggle("light-mode", e.target.checked);
  });

  window.addEventListener("scroll", () => {
    const scrollBar = document.getElementById("scrollBar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    scrollBar.style.width = `${(window.scrollY / totalHeight) * 100}%`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".section").forEach(sec => observer.observe(sec));

  // 🌟 Button Glow Effect
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const color = getRandomGlowColor();
      btn.style.boxShadow = `0 0 25px 10px ${color}`;
      setTimeout(() => {
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
    return getRandom(colors);
  }

  // 🎧 Audio Player Logic
  const playPauseBtn = document.getElementById("playPauseBtn");
  const seekBar = document.getElementById("seekBar");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶️";
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    seekBar.max = Math.floor(audio.duration);
    durationEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    seekBar.value = Math.floor(audio.currentTime);
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  seekBar.addEventListener("input", () => {
    audio.currentTime = seekBar.value;
  });

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60).toString().padStart(2, "0");
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }
});

document.getElementById("rewind").addEventListener("click", () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
});

document.getElementById("forward").addEventListener("click", () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

document.getElementById("loopBtn").addEventListener("click", () => {
  audio.loop = !audio.loop;
  document.getElementById("loopBtn").style.background = audio.loop ? "#00adb5" : "";
});


document.getElementById("prevTrack").addEventListener("click", () => {
  audio.currentTime = 0;
});

const playlist = ["Music6.mp3", "music5.mp3", "Music4.mp3"];
let currentTrackIndex = 0;
const audio = document.getElementById("audio");

// Play selected track
function loadTrack(index) {
  if (index >= 0 && index < playlist.length) {
    currentTrackIndex = index;
    audio.src = playlist[index];
    audio.play();
  }
}

// Next and Previous buttons
document.getElementById("nextTrack").addEventListener("click", () => {
  let next = (currentTrackIndex + 1) % playlist.length;
  loadTrack(next);
});

document.getElementById("prevTrack").addEventListener("click () => {
  let prev = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(prev);
});

// Start with first track
loadTrack(0);


const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const source = audioCtx.createMediaElementSource(audio);
const analyser = audioCtx.createAnalyser();
const playerBox = document.querySelector('.custom-player');

source.connect(analyser);
analyser.connect(audioCtx.destination);
analyser.fftSize = 512;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function detectBeat() {
  requestAnimationFrame(detectBeat);
  analyser.getByteFrequencyData(dataArray);

  let bassEnergy = 0;
  for (let i = 0; i < 10; i++) {
    bassEnergy += dataArray[i];
  }
  bassEnergy = bassEnergy / 10;

  if (bassEnergy > 160) {
    playerBox.style.boxShadow = "0 0 25px rgba(0, 255, 255, 0.8)";
    playerBox.style.transform = "scale(1.04)";
  } else {
    playerBox.style.boxShadow = "0 0 8px rgba(0, 255, 255, 0.2)";
    playerBox.style.transform = "scale(1)";
  }
}

audio.addEventListener("play", () => {
  audioCtx.resume().then(() => {
    detectBeat();
  });
});
