let cards = [
    {
        bgimg: "assets/teentitans.png",
        color: "yellow",
    },
    {
        bgimg: "assets/ppg.png",
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