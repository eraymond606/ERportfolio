// Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.list');
let timeDom = carouselDom.querySelector('.time');

let timeRunning = 3000;
let timeAutoNext = 10000;

nextDom.onclick = function () {
  showSlider('next');
};

prevDom.onclick = function () {
  showSlider('prev');
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll('.item');

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    carouselDom.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}
