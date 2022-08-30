// variable to stop sti in any where
let stop;
// variable to control change backgraound
let backOption = true;
// variable of header
let header = document.querySelector(".header");
// array of img to change header
let imgArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// function to randomize header
function randomImg() {
  if (backOption === true) {
    // function to change img at 5sec
    stop = setInterval(() => {
      // variable to make random num of arrimg
      let random = Math.floor(Math.random() * imgArr.length);

      header.style.backgroundImage = `url("imgs/${imgArr[random]}")`;
    }, 3000);
  }
}

randomImg();

// var of settingbox
let settingBox = document.querySelector(".setting-box");
// icon gear
let gear = document.getElementById("gear");
// event click to gear to make some order
gear.addEventListener("click", function (e) {
  // 1-put spin to gear
  gear.classList.toggle("fa-spin");
  // 2-put class open to open setting box
  settingBox.classList.toggle("open");
});

// get value of setlocal storage
if (localStorage.length > 0) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );
  // remove active class from all again to equal with item which in local storage
  document.querySelectorAll(".color-option li").forEach((eo) => {
    eo.classList.remove("active");
    // put active in item in local storage
    if (eo.dataset.color === localStorage.getItem("color")) {
      eo.classList.add("active");
    }
  });
}
//  variable of all li of colors
let liBalls = document.querySelectorAll(".color-option li");
// looping on lis
liBalls.forEach((item) => {
  item.addEventListener("click", function () {
    // body setproperty change main color with the current item
    document.documentElement.style.setProperty(
      "--main-color",
      item.dataset.color
    );
    // remove active class from all elements
    item.parentElement
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    // add active class for current element
    item.classList.add("active");
    // set color value into local storage
    localStorage.setItem("color", item.dataset.color);
  });
});

// while scroling change color of background of (gear and setting box)
let iconbg = document.querySelector(".icon");
window.onscroll = function () {
  if (scrollY >= 450) {
    iconbg.style.background = "#222";
    settingBox.style.background = "#222";
  } else {
    settingBox.style.background = "#fff";
    iconbg.style.background = "#fff";
  }
};

// animate width

// varuable of sec skills
let skills = document.querySelector(".skills");
// variable of all spans
let spans = document.querySelectorAll(".span");
window.addEventListener("scroll", function () {
  if (scrollY >= skills.offsetTop - 100) {
    spans.forEach((currentItem) => {
      currentItem.style.width = currentItem.dataset.width;
    });
  }
});

//var to span yes,no
let buttonRandom = document.querySelectorAll(".background-option span");

// looping in yes , no
buttonRandom.forEach((item) => {
  item.addEventListener("click", function () {
    // remove active from yes,no
    item.parentElement
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    // add active from yes,no
    item.classList.add("active");
    // check if the button which click =yes >will start function of random
    if (item.dataset.change === "yes") {
      backOption = true;
      randomImg();
    }
    // check if the button which click =yes >will stop function of random
    else if (item.dataset.change === "no") {
      backOption = false;
      clearInterval(stop);
    }
  });
});

let images = document.querySelectorAll(".gallery img");
images.forEach((img) => {
  img.addEventListener("click", function () {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    let popup = document.createElement("div");
    popup.className = "popup";
    document.body.appendChild(popup);

    let photo = document.createElement("img");
    photo.src = img.src;
    popup.appendChild(photo);
    document.body.appendChild(popup);

    let closeButton = document.createElement("span");
    closeButton.className = "close";
    let kalam = document.createTextNode("X");
    closeButton.appendChild(kalam);
    popup.appendChild(closeButton);

    closeButton.onclick = function () {
      popup.classList.add("closing");
      overlay.classList.add("closing");
    };

    document.body.appendChild(popup);
    let text = document.createElement("span");
    text.className = "text";
    let alt = document.createTextNode(this.alt);
    text.appendChild(alt);
    popup.prepend(text);
    document.body.appendChild(popup);
  });
});

// dark mode
let about = document.getElementById("about");
let body = document.getElementById("body");
let dark = document.getElementById("dark");

dark.addEventListener("click", function () {
  body.classList.toggle("dark");
  skills.style.color = "black";
});
// scroll to top
let up = document.getElementById("up");
window.addEventListener("scroll", function () {
  if (scrollY >= 500) {
    up.classList.add("block");
  } else {
    up.classList.remove("block");
  }
});
up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
let h = document.querySelector(".contnet");
console.log(h);
let f = document.querySelector(".f");
let aboutas = document.querySelector(".about-us");
document.addEventListener("scroll", function () {
  if (scrollY >= aboutas.offsetTop - 250) {
    h.style.transform = "translateX(0)";
    f.style.transform = "translateX(0)";
  }
});
let preloader = document.getElementById("preload");
window.onload = function () {
  preloader.style.display = "block";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 3000);
};
