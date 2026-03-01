// DOWNLOAD TIMER
const btn = document.getElementById("downloadBtn");
const timerText = document.getElementById("timerText");
const servers = document.getElementById("servers");

btn.addEventListener("click", () => {
  btn.disabled = true;
  btn.style.opacity = "0.6";

  let timeLeft = 10;
  timerText.innerText = `Preparing download... ${timeLeft}s`;

  const interval = setInterval(() => {
    timeLeft--;
    timerText.innerText = `Preparing download... ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      timerText.innerText = "Download ready!";
      servers.style.display = "block";
    }
  }, 1000);
});

// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
