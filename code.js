
let cards = [
  {
    bgimg: "assets/teentitans.png",
    color: "yellow",
  },
  {
    bgimg: "assets/powerpuffgirls.png",
    color: "pink",
  },
  {
    bgimg: "assets/r&m.png",
    color: "blue",
  },
];

let html = "";
for (let i = 0; i < cards.length; i++) {
  html += `
    <article class="cards ${cards[i].color}">
      <img src="${cards[i].bgimg}" alt="" class="cardimg">
      <div class="stream">
        <div class="triangle"></div>
        <h5 class="streamtext">STREAM</h5>
      </div>
    </article>
  `;
}

document.getElementById("pop").innerHTML = html;

// ====== SECOND ARRAY (Characters Grid) ======
let char = [
  {
    bgimg: "assets/finn.png",
    color: "card1",
    name: "Finn the Human",
    show: "Adventure Time",
  },
  {
    bgimg: "assets/jake.png",
    color: "card2",
    name: "Jake The Dog",
    show: "Adventure Time",
  },
  {
    bgimg: "assets/blossom.png",
    color: "card3",
    name: "Blossom",
    show: "Powerpuff Girls",
  },
  {
    bgimg: "assets/dexter.png",
    color: "card4",
    name: "Dexter",
    show: "Dexter's Laboratory",
  },
  {
    bgimg: "assets/gumball.png",
    color: "card5",
    name: "Gumball Watterson",
    show: "The Amazing World of Gumball",
  },
  {
    bgimg: "assets/darwin.png",
    color: "card6",
    name: "Darwin Watterson",
    show: "The Amazing World of Gumball",
  },
  {
    bgimg: "assets/johnny.png",
    color: "card7",
    name: "Johnny Bravo",
    show: "Johnny Bravo",
  },
  {
    bgimg: "assets/courage.png",
    color: "card8",
    name: "Courage",
    show: "Courage The Cowardly Dog",
  },
  {
    bgimg: "assets/gwen.png",
    color: "card9",
    name: "Gwen",
    show: "Total Drama Island",
  },
];

let charhtml = "";
for (let i = 0; i < char.length; i++) {
  charhtml += `
    <div class="char">
      <img src="${char[i].bgimg}" alt="" class="charimg">
      <div class="content ${char[i].color}">
        <h3>${char[i].name}</h3>
        <h4>${char[i].show}</h4>
      </div>
    </div>
  `;
}

document.getElementById("grid").innerHTML = charhtml;




window.onload = function() {

  if (Math.random() < 1/2) {
    const popup = document.getElementById("popup-ad");
    const closeBtn = document.querySelector(".close-btn");

    popup.style.display = "flex";

    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  }
};


document.querySelector('.scroll').onclick = () => {
document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    };