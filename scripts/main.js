const toggle = document.getElementById("toggle-theme");
const body = document.body;
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

function carregar() {
  const msg = document.getElementById("msg");
  const hora = new Date().getHours();
  let saudacao = "";

  if (hora <= 12) {
    saudacao = "Bom Dia!";
  } else if (hora <= 18) {
    saudacao = "Boa Tarde!";
  } else {
    saudacao = "Boa Noite!";
  }

  msg.innerHTML = `<h1>${saudacao}</h1>`;
}

const text = "Guilherme Fernando";
const typedEl = document.getElementById("typed");

let i = 0;
function digitar() {
  if (i < text.length) {
    typedEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(digitar, 120);
  }
}

window.addEventListener("DOMContentLoaded", digitar);

const skills = [
  { name: "HTML", icon: "fa-html5" },
  { name: "CSS", icon: "fa-css3-alt" },
  { name: "JavaScript", icon: "fa-js" },
  { name: "React.js", icon: "fa-react" },
];

const container = document.querySelector("#skills .cards-container");

for (let skill of skills) {
  const card = document.createElement("div");
  card.className = "card";

  const cardIcon = document.createElement("div");
  cardIcon.className = "card-icon";
  cardIcon.innerHTML = `<i class="fa-brands ${skill.icon}"></i>`;

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = skill.name;

  card.appendChild(cardIcon);
  card.appendChild(cardTitle);

  container.appendChild(card);
}

function criarCarrossel(containerSelector) {
  const container = document.querySelector(containerSelector);
  const items = container.children;

  if (window.innerWidth > 768) return;

  let index = 0;

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  items[0].style.display = "block";

  const prev = document.createElement("button");
  const next = document.createElement("button");

  prev.innerHTML = "▶";
  next.innerHTML = "◀";

  prev.style.margin = "10px";
  next.style.margin = "10px";

  container.after(prev);
  container.after(next);

  prev.onclick = () => {
    items[index].style.display = "none";
    index = (index - 1 + items.length) % items.length;
    items[index].style.display = "block";
  };

  next.onclick = () => {
    items[index].style.display = "none";
    index = (index + 1) % items.length;
    items[index].style.display = "block";
  };
}

function iniciarCarrosseis() {
  if (window.innerWidth <= 768) {
    criarCarrossel("#projeto-container");
    criarCarrossel("#certifications .cards-container");
  }
}

window.addEventListener("load", iniciarCarrosseis);
window.addEventListener("resize", iniciarCarrosseis);
