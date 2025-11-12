// script.js (SUBSTITUIR AS REGRAS EXISTENTES)

const giftBox = document.getElementById("giftBox");
const lid = document.getElementById("lid");
// const title = document.getElementById("title"); // REMOVIDO!
const message = document.getElementById("message");

giftBox.addEventListener("click", () => {
  // 1. Abertura da Tampa com efeito elástico (curva no CSS)
  lid.style.transform = "translateY(-180px) rotate(45deg)"; // Lança a tampa mais alto e roda
  lid.style.opacity = "0"; // Faz a tampa sumir
  
  // 2. Remoção do Presente
  setTimeout(() => {
    // Diminui o presente antes de esconder
    giftBox.style.transform = "scale(0.01)"; // Efeito de encolhimento
    giftBox.style.opacity = "0";
    
    // 3. Exibição da Mensagem e Confete
    setTimeout(() => {
      giftBox.style.display = "none";
      // title.style.display = "none"; // REMOVIDO!
      
      message.classList.remove("hidden");
      createConfetti();
      
    }, 400); // 0.4s após o presente começar a encolher
  }, 500); // 0.5s após o clique (espera um pouco a tampa abrir)
});


// ... (Manter as funções createHeart e createConfetti como estão no seu projeto original ou usar as sugestões de melhoria de confete que fiz antes)


// ❤️ Corações flutuantes (Mantendo a função original para não forçar a mudança)
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

// 🎉 Confete (Mantendo a função original)
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
