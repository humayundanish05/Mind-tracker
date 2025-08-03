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

// 🎧 Custom Audio Player Setup
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const seekBar = document.getElementById("seekBar");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");
  const rewindBtn = document.getElementById("rewind");
  const forwardBtn = document.getElementById("forward");
  const loopBtn = document.getElementById("loopBtn");
  const volumeSlider = document.getElementById("volumeSlider");
  const nextTrackBtn = document.getElementById("nextTrack");
  const prevTrackBtn = document.getElementById("prevTrack");

  const playlist = ["Music6.mp3", "music5.mp3", "Music4.mp3"];
  let currentTrackIndex = 0;

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60).toString().padStart(2, "0");
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  function loadTrack(index) {
    if (index >= 0 && index < playlist.length) {
      currentTrackIndex = index;
      audio.src = playlist[currentTrackIndex];
      audio.play();
      playPauseBtn.textContent = "⏸️";
    }
  }

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶️";
    }
  });

  rewindBtn.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  });

  forwardBtn.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
  });

  loopBtn.addEventListener("click", () => {
    audio.loop = !audio.loop;
    loopBtn.style.backgroundColor = audio.loop ? "#00adb5" : "";
  });

  nextTrackBtn.addEventListener("click", () => {
    const next = (currentTrackIndex + 1) % playlist.length;
    loadTrack(next);
  });

  prevTrackBtn.addEventListener("click", () => {
    const prev = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(prev);
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = parseFloat(volumeSlider.value);
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

  loadTrack(0); // Start first track

  // 🌈 Button Glow Effect
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = getRandomGlowColor();
      btn.style.boxShadow = `0 0 25px 10px ${color}`;
      setTimeout(() => {
        btn.style.boxShadow = `0 0 10px ${color}`;
      }, 1500);
    });
  });

  function getRandomGlowColor() {
    const colors = [
      "rgba(255, 99, 132, 0.8)",
      "rgba(54, 162, 235, 0.8)",
      "rgba(255, 206, 86, 0.8)",
      "rgba(75, 192, 192, 0.8)",
      "rgba(153, 102, 255, 0.8)",
      "rgba(255, 159, 64, 0.8)",
      "rgba(0, 255, 140, 0.8)"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // 📊 Scroll Progress Bar
  window.addEventListener("scroll", () => {
    const scrollBar = document.getElementById("scrollBar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / totalHeight) * 100;
    scrollBar.style.width = `${scrolled}%`;
  });

  // 🌓 Mode Toggle
  const modeToggle = document.getElementById("modeToggle");
  if (modeToggle) {
    modeToggle.addEventListener("change", (e) => {
      document.body.classList.toggle("light-mode", e.target.checked);
    });
  }

  // 👁️ Fade In Sections on Scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".section").forEach((sec) => observer.observe(sec));

  // 🎨 Canvas Visualizer
  const canvas = document.createElement("canvas");
  canvas.id = "visualizerCanvas";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let audioContext;
  let analyser;
  let sourceNode;
  let dataArray;
  let bufferLength;

  function setupAudioVisualizer() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    sourceNode = audioContext.createMediaElementSource(audio);
    sourceNode.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 256;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    drawVisualizer();
  }

  function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) / 2;
    const bars = 64;

    for (let i = 0; i < bars; i++) {
      const angle = (i / bars) * Math.PI * 2;
      const barLength = dataArray[i] / 1.5;
      const x1 = centerX + Math.cos(angle) * radius;
      const y1 = centerY + Math.sin(angle) * radius;
      const x2 = centerX + Math.cos(angle) * (radius + barLength);
      const y2 = centerY + Math.sin(angle) * (radius + barLength);

      ctx.strokeStyle = `hsl(${i * 6}, 100%, 50%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }

  audio.addEventListener("play", () => {
    if (!audioContext) {
      setupAudioVisualizer();
    }
  });

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
