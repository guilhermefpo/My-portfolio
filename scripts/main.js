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
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React.js", icon: "fab fa-react" },
  { name: "MySQL", icon: "fas fa-database" },
];
const container = document.querySelector("#skills .cards-container");

for (let skill of skills) {
  const card = document.createElement("div");
  card.className = "card";

  const cardIcon = document.createElement("div");
  cardIcon.className = "card-icon";
  cardIcon.innerHTML = `<i class="${skill.icon}"></i>`;

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = skill.name;

  card.appendChild(cardIcon);
  card.appendChild(cardTitle);

  container.appendChild(card);
}

async function buscarProjetos() {
  try {
    const responsta = await fetch("http://localhost:2000/projetos");
    const dados = await responsta.json();

    const container = document.getElementById("projeto-container");

    console.log(dados);
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  digitar();
  buscarProjetos();
});
