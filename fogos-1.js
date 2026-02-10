const canvas = document.getElementById("fogos");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworksActive = false;
let fireworkInterval = null;

const particles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework() {
  if (!fireworksActive) return;

  const x = random(120, canvas.width - 120);
  const y = random(100, canvas.height / 2);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x,
      y,
      angle: random(0, Math.PI * 2),
      speed: random(2, 6),
      life: random(60, 90),
      size: random(1.8, 2.6)
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;

    ctx.fillStyle = "rgba(255,182,193,0.85)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();

window.onload = () => {
  const coracao = document.querySelector(".coracao");
  const mensagem = document.querySelector(".final-message");

  canvas.style.opacity = 0;
  mensagem.classList.remove("show");

  coracao.classList.add("ativo");

  coracao.addEventListener("animationend", () => {
    coracao.style.display = "none";

    setTimeout(() => {
      fireworksActive = true;
      canvas.style.opacity = 1;

      fireworkInterval = setInterval(createFirework, 650);
    }, 300);

    setTimeout(() => {
      mensagem.classList.add("show");
    }, 1200);
  });
};

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
