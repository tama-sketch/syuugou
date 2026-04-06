const video = document.getElementById("video");
const overlay = document.getElementById("overlay");

let started = false;

document.addEventListener("click", () => {
  if (!started) {
    // 初回クリック
    video.muted = false;
    video.play();
    overlay.style.display = "none";
    started = true;
  } else {
    if (video.paused) {
      // 再開
      video.play();
      video.style.filter = "invert(0)"; // 元に戻す
      overlay.style.display = "none";
    } else {
      // 一時停止
      video.pause();
      video.style.filter = "invert(1) grayscale(1)"; // 白黒反転
    }
  }
});
