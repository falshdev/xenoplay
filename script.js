const btn = document.getElementById("downloadBtn");
const timerText = document.getElementById("timerText");
const servers = document.getElementById("servers");

btn.addEventListener("click", () => {
  btn.disabled = true;
  btn.style.opacity = "0.6";

  let timeLeft = 10;
  timerText.classList.remove("hidden");

  const interval = setInterval(() => {
    timerText.innerText = `Preparing download... ${timeLeft}s`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      timerText.innerText = "Download ready!";
      servers.classList.remove("hidden");
    }
  }, 1000);
});
