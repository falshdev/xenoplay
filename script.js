const btn = document.getElementById("downloadBtn");
const timerText = document.getElementById("timerText");
const servers = document.getElementById("servers");

btn.addEventListener("click", () => {
  btn.disabled = true;
  btn.classList.add("clicked"); // fade effect

  let timeLeft = 10;
  timerText.innerText = `Preparing download... ${timeLeft}s`;

  const interval = setInterval(() => {
    timeLeft--;
    timerText.innerText = `Preparing download... ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      timerText.innerText = "Select a server below 👇";
      servers.style.display = "block";
    }
  }, 1000);
});
