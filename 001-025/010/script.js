const cialloAudio = document.querySelector("#ciallo-audio");
const bodyElement = document.querySelector("body");
const container = document.querySelector(".container");

let counter = 1;

// use counter to decide which string to show

const kColorArray = [
  "#f2d5cf", "#eebebe", "#f4b8e4", "#ca9ee6", "#e78284", "#ea999c",
  "#ef9f76", "#e5c890", "#a6d189", "#81c8be", "#99d1db", "#85c1dc",
  "#8caaee", "#babbf1", "#c6d0f5", "#b5bfe2", "#a5adce", "#949cbb"
];

// predefined colors, see [catppuccin](https://catppuccin.com/)

let loopLeftKeyframes = "@keyframes loop-left {from {left: 100%;} to {left: -100%;} }";
let loopLeftStylesheet = document.createElement("style");

if (loopLeftStylesheet.styleSheet) {
  loopLeftStylesheet.styleSheet.cssText = loopLeftKeyframes;
} else {
  loopLeftStylesheet.appendChild(document.createTextNode(loopLeftKeyframes));
}

document.head.appendChild(loopLeftStylesheet);

document.addEventListener("click", (event) => {
  cialloAudio.play();
  let textSpan = document.createElement("span");

  let x = event.clientX, y = event.clientY;
  let idx = Math.floor(Math.random() * kColorArray.length); // color index : [0, kColorArray - 1]
  let fontSize = Math.floor(Math.random() * 18 + 12);       // font size   : [12, 29]
  let moveTime = Math.floor(Math.random() * 5 + 3);         // move time   : [3, 7]

  textSpan.textContent = (counter % 2 === 1)
                       ? "Ciallo～(∠・ω< )⌒☆"
                       : "Ciallo～(∠・ω< )⌒★";

  textSpan.style.position = "absolute";
  textSpan.style.left = x + "px";
  textSpan.style.top  = y + "px";

  // the string will appear the position where user presses
  
  textSpan.style.color = kColorArray[idx];
  textSpan.style.fontSize = fontSize + "pt";
  textSpan.style.display = "inline-block";
  textSpan.style.whiteSpace = "nowrap";
  textSpan.style.animationName = "first-move";
  textSpan.style.animationDuration = moveTime + "s";
  textSpan.style.animationTimingFunction = "linear";
  textSpan.style.animationFillMode = "forwards";

  // using pure JavaScript to deal with CSS properties is boring and repeated

  let firstMoveKeyframes = "@keyframes first-move {from {left: " + x + "px;} to {left: -100%;} }";
  let firstMoveStylesheet = document.createElement("style");
  firstMoveStylesheet.id = "keyframes-first-move-" + counter;

  if (counter !== 1) {
    let lastFirstMoveStylesheet = document.getElementById("keyframes-first-move-" + (counter - 1));
    document.head.removeChild(lastFirstMoveStylesheet);
  }

  // when the last motion defined by the last stylesheet has ended
  // delete the last stylesheet.

  if (firstMoveStylesheet.styleSheet) {
    firstMoveStylesheet.styleSheet.cssText = firstMoveKeyframes;
  } else {
    firstMoveStylesheet.appendChild(document.createTextNode(firstMoveKeyframes));
  }

  document.head.appendChild(firstMoveStylesheet);

  textSpan.addEventListener("animationend", function() {
    this.style.animationName = "loop-left";
    this.style.animationDuration = moveTime + "s";
    this.style.animationIterationCount = "infinite";
    this.style.animationTimingFunction = "linear";
    this.style.animationFillMode = "both";
  });

  container.appendChild(textSpan);
  counter++;
});