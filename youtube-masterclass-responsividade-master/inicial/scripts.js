// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Doações de alimentos",
    duration: "",
    thumb: "./images/alimentos.png",
    video_id: "GykTLqODQuU"
  },
  {
    title: "Doações de água",
    duration: "",
    thumb: "./images/agua.png",
    video_id: "HN1UjzRSdBk"
  },
  {
    title: "Doações de roupas",
    duration: "",
    thumb: "./images/roupa.png",
    video_id: "rAzHvYnQ8DY"
  },
  {
    title: "O que mais precisamos no momento",
    duration: "",
    thumb: "./images/doação1.jpg",
    video_id: "ghTrp1x_1As"
  },
  {
    title: "Pontos de Coletas proximos a você",
    duration: "",
    thumb: "./images/ponto.png",
    video_id: "GSqR2i-Pq6o"
  },
  {
    title:
      "Como doar em grande escala",
    duration: "",
    thumb: "./images/grande.png",
    video_id: "2alg7MQ6_sI"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});
