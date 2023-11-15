var slides = document.querySelectorAll(".container-img-background");
var i = 1;
var delay = 5000;

function slideshow() {
  slides[i - 1].classList.add("show");
  setInterval(loop, delay);

  function loop() {
    slides[i].classList.add("show");
    if (i == 0) {
      slides[slides.length - 1].classList.remove("show");
      i++;
    } else if (i == slides.length - 1) {
      slides[i - 1].classList.remove("show");
      i = 0;
    } else {
      slides[i - 1].classList.remove("show");
      i++;
    }
  }
}

slideshow();
