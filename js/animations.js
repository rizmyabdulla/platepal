// animation 1 - dynamic intro title
const introTitle = document.getElementById("introTitle");
let dynamicText = ["Steamed", "Fried", "Baked"];

function playInAnimation() {
  introTitle.style.animation = "intro-title-in 0.5s ease-in-out";
  introTitle.innerHTML = dynamicText[0];
  dynamicText.push(dynamicText.shift());
}

function playOutAnimation() {
  introTitle.style.animation = "intro-title-out 0.5s ease-in-out";

  introTitle.addEventListener("animationend", function () {
    introTitle.removeEventListener("animationend", arguments.callee);
    playInAnimation();
  });
}

playInAnimation();

setInterval(() => {
  playOutAnimation();
}, 4000);

//animation 2 - Intro picture zooming and changing Animation

const introImg = document.getElementById("introImg");
let dynamicImg = ["food-img-01.jpg", "food-img-02.jpg", "food-img-03.jpg"];

function playAnimation() {
  introImg.style.opacity = "0"; // Set opacity to 0 before changing the source

  setTimeout(() => {
    introImg.src = `assets/images/${dynamicImg[0]}`;
    dynamicImg.push(dynamicImg.shift());
    introImg.style.opacity = "1"; // Set opacity back to 1 after changing the source
  }, 500); // Adjust the delay to match the transition duration

  introImg.style.animation = "intro-img-zoom 8s ease-in-out";

  setTimeout(() => {
    introImg.style.opacity = "0";
  }, 7650);

  setTimeout(() => {
    introImg.style.animation = "none";
  }, 7950);
}

setInterval(playAnimation, 8000);

playAnimation();

document.addEventListener("DOMContentLoaded", function () {
  IntersectionObserverUtil.init(".observer", (id) => {
    changeHash(id);
  });
});
