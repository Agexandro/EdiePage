const menu = () => {
    menuIcon = document.querySelector(".menu");
    nav = document.querySelector(".nav-links");

    menuIcon.onclick = () => {
      nav.classList.toggle("nav-links-active");
      if (menuIcon.innerText == "menu") {
        menuIcon.innerText = "close";
        menuIcon.style.color = "white";
      } else {
        menuIcon.innerText = "menu";
        menuIcon.style.color = "#333";
      }
    }
  }
  menu();