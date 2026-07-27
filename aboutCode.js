let timelineSec = document.getElementById("timeline");

let tlContents = [
    {
        day: "October 1",
        year: "1992",
        tlTitle: "cartoon network launches",
        tlImg: "assets/OldLogo.png",
        imgClass: "tlImg1",
        tlSub: "The world’s first 24/7 animation channel debuts, built from Hanna-Barbera’s legendary library."

    },

     {
        day: "December 3",
        year: "1993",
        tlTitle: "First show aired",
        tlImg: "assets/max.png",
        imgClass: "tlImg2",
        tlSub: "CN releases “The Moxy Show”  kicking off its legacy of original programming."

    },

    {
        day: "Ocotber 3",
        year: "1996",
        tlTitle: "What a Cartoon!",
        tlImg: "assets/ppg.png",
        imgClass: "tlImg3",
        tlSub: "This incubator program introduces future hits like Dexter’s Laboratory, Johnny Bravo, and The Powerpuff Girls."
    },

    {
        day: "June 14",
        year: "2004",
        tlTitle: "CN City Era",
        tlImg: "assets/cnCIty.png",
        imgClass: "tlImg4",
        tlSub: "A major rebrand introduces the “CN City” aesthetic, giving the network a modern, character-driven identity."
    }

]

for (i = 0; i < tlContents.length; i++) {

    timelineSec.innerHTML += `

    <div class="tlContent">
                <div class="tlDate">
                    <p class="day">${tlContents[i].day}</p>
                    <p class="year">${tlContents[i].year}</p>
                </div>
                <div class="tlBlock"></div>
                <div class="tlText">
                    <p class="tlTitle">${tlContents[i].tlTitle}</p>
                    <img class="${tlContents[i].imgClass}" src="${tlContents[i].tlImg}" alt="">
                    <p class="tlSub">${tlContents[i].tlSub}</p>
                </div>
            </div>
    
    `


}