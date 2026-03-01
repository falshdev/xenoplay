// RANDOM SPLASH TIME
const splash = document.getElementById("splash");
const main = document.getElementById("main");

const delay = Math.random() * 1000 + 500;

setTimeout(() => {
  splash.style.display = "none";
  main.classList.remove("hidden");
}, delay);

// GO DOWNLOAD PAGE
function goDownload() {
  window.location.href = "download.html";
}
