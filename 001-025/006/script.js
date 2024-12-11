const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let load = 0;

let interval = setInterval(blurry, 30);

function blurry() {
  load++;
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}