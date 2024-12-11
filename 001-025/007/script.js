const boxes = document.querySelectorAll(".content-box");

window.addEventListener("scroll",  () => {
  const triggerBottom = window.innerHeight * 4 / 5 ;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    
    if (boxTop < triggerBottom) {
        box.classList.add("show");
    } else {
        box.classList.remove("show");
    }
  });
}
);