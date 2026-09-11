const gate = document.getElementById('sealGate');
const seal = document.getElementById('sealButton');
let opened = false;
function openInvitation() {
  if (opened) return;
  opened = true;
  gate.classList.add('opening');
  document.body.classList.add('open');
  setTimeout(() => {
    gate.classList.add('opened');
    document.querySelector('.hero').classList.add('visible');
  }, 700);
}
seal.addEventListener('click', openInvitation);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const sparkles = document.getElementById('sparkles');
for (let i = 0; i < 18; i += 1) {
  const spark = document.createElement('span');
  spark.className = 'spark';
  spark.textContent = i % 2 ? '✦' : '•';
  spark.style.left = `${Math.random() * 100}%`;
  spark.style.fontSize = `${7 + Math.random() * 10}px`;
  spark.style.animationDuration = `${8 + Math.random() * 9}s`;
  spark.style.animationDelay = `${-Math.random() * 15}s`;
  sparkles.appendChild(spark);
}

document.getElementById('shareButton').addEventListener('click', async () => {
  const data = { title: 'हुंडारे परिवार गणपती आमंत्रण', text: '१४ सप्टेंबर रोजी गणपती आगमन व १६ सप्टेंबर रोजी सत्यनारायण पूजा. महाप्रसाद दुपारी १ ते ४.', url: window.location.href };
  if (navigator.share) await navigator.share(data).catch(() => {});
  else {
    await navigator.clipboard.writeText(window.location.href);
    const button = document.getElementById('shareButton');
    button.textContent = 'लिंक कॉपी झाली ✓';
    setTimeout(() => { button.textContent = 'आमंत्रण शेअर करा'; }, 2200);
  }
});
