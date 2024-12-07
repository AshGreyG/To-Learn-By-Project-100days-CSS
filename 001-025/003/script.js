const progress = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActiveID = 1;

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActiveID) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  
  const actives = document.querySelectorAll(".active");

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

  if (currentActiveID === 1) {
    prevButton.disabled = true;
  } else if (currentActiveID === circles.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}

nextButton.addEventListener('click', () => {
  currentActiveID++;
  if (currentActiveID > circles.length) {
    currentActiveID = circles.length;
  }
  update();
});

prevButton.addEventListener('click', () => {
  currentActiveID--;
  if (currentActiveID < 1) {
    currentActiveID = 1;
  }
  update();
});
