
  let movies = [
    "assets/m1.png",
    "assets/m2.png",
    "assets/m3.png",
    "assets/m4.png",
    "assets/m5.png"
  ];

  let series = [
    "assets/ss1.png",
    "assets/ss2.png",
    "assets/ss3.png",
    "assets/ss4.png",
    "assets/ss5.png"
  ];


  function renderItems(containerId, items) {
    let container = document.getElementById(containerId);
    items.forEach((img) => {
      let div = document.createElement("div");
      div.classList.add("moviediv");
      div.style.backgroundImage = `url(${img})`;
      container.appendChild(div);
    });
  }


  renderItems("movies", movies);
  renderItems("series", series);


  let newImages = [
    "assets/n1.png",
    "assets/n2.png",
    "assets/n3.png",
    "assets/n4.png"
  ];

  function renderNewSection(containerId, items) {
    let container = document.getElementById(containerId);
    items.forEach((img) => {
      let div = document.createElement("div");
      div.classList.add("newimg");
      div.style.backgroundImage = `url(${img})`;
      container.appendChild(div);
    });
  }
  renderNewSection("new", newImages);
