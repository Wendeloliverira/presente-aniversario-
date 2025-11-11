const giftBox = document.getElementById("giftBox");
const lid = document.getElementById("lid");
const title = document.getElementById("title");
const message = document.getElementById("message");

giftBox.addEventListener("click", () => {
  lid.style.transform = "translateY(-80px) rotate(-10deg)";
  setTimeout(() => {
    giftBox.style.opacity = "0";
    title.style.opacity = "0";
    setTimeout(() => {
      giftBox.style.display = "none";
      title.style.display = "none";
      message.classList.remove("hidden");
      createConfetti();
    }, 500);
  }, 800);
});

// ❤️ Corações flutuantes
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  document.body.appendChild(heart);

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = Math.random() * 50 + "px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 400);

// 🎉 Confete
function createConfetti() {
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.opacity = 1;
    confetti.style.transition = "transform 3s ease, opacity 3s ease";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.transform = `translateY(${Math.random() * 500 - 250}px) rotate(${Math.random() * 720}deg)`;
      confetti.style.opacity = 0;
    }, 50);

    setTimeout(() => confetti.remove(), 3000);
  }
}
