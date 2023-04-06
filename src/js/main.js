


let iceCreamSliderBackImage = document.querySelector(".main-back-pictire");
let iceCreamSliderBackImageFirst = document.querySelector(".back-image-first");
let iceCreamSliderBackImageSecond = document.querySelector(".back-image-second");
let iceCreamSliderBigImage = document.querySelector(".big-ice-cream");
let iceCreamSliderLittleImageFirst = document.querySelector(".little-ice-cream-first");
let iceCreamSliderLittleImageSecond = document.querySelector(".little-ice-cream-second");
let iceCreamSliderBulletFirst = document.querySelector(".first-bullet");
let iceCreamSliderBulletSecond = document.querySelector(".second-bullet");
let iceCreamSliderBulletThird = document.querySelector(".third-bullet");

let body = document.querySelector("body");



let iceCreamSliderLeftArrow = document.querySelector(".slider-left-arrow");
let iceCreamSliderRightArrow = document.querySelector(".slider-right-arrow");
let currentPage = 0;

let iceCreamSliderSwitch = () => {
    iceCreamSliderLeftArrow.addEventListener('click', (evt) => {
        evt.preventDefault();
        iceCreamSliderBulletFirst.classList.remove('current-bullet');
        iceCreamSliderBulletSecond.classList.remove('current-bullet');
        iceCreamSliderBulletThird.classList.remove('current-bullet');
        if (currentPage === 0) {
            body.style.backgroundColor = '#FCC850';
            iceCreamSliderBigImage.src = 'src/images/white-big-ice-cream.png'
            iceCreamSliderBackImage.classList.remove('back-picture-red');
            iceCreamSliderBackImageFirst.classList.remove('back-picture-red');
            iceCreamSliderBackImageSecond.classList.remove('back-picture-red');
            iceCreamSliderBackImage.classList.add('back-picture-yellow');
            iceCreamSliderBackImageFirst.classList.add('back-picture-yellow');
            iceCreamSliderBackImageSecond.classList.add('back-picture-yellow');
            iceCreamSliderLittleImageFirst.src = 'src/images/red-little-ice-cream.png';
            iceCreamSliderLittleImageSecond.src = 'src/images/yellow-little-ice-cream.png';
            iceCreamSliderBulletThird.classList.add('current-bullet');
            currentPage = 2;
        } else if (currentPage === 1) {
            body.style.backgroundColor = '#feafc3';
            iceCreamSliderBigImage.src = 'src/images/red-big-ice-cream.png'
            iceCreamSliderBackImage.classList.remove('back-picture-blue');
            iceCreamSliderBackImageFirst.classList.remove('back-picture-blue');
            iceCreamSliderBackImageSecond.classList.remove('back-picture-blue');
            iceCreamSliderBackImage.classList.add('back-picture-red');
            iceCreamSliderBackImageFirst.classList.add('back-picture-red');
            iceCreamSliderBackImageSecond.classList.add('back-picture-red');
            iceCreamSliderLittleImageFirst.src = 'src/images/yellow-little-ice-cream.png';
            iceCreamSliderLittleImageSecond.src = 'src/images/white-little-ice-cream.png';
            iceCreamSliderBulletFirst.classList.add('current-bullet');
            currentPage = 0;
        } else if (currentPage === 2) {
            body.style.backgroundColor = '#69A9FF';
            iceCreamSliderBigImage.src = 'src/images/yellow-big-ice-cream.png'
            iceCreamSliderBackImage.classList.remove('back-picture-yellow');
            iceCreamSliderBackImageFirst.classList.remove('back-picture-yellow');
            iceCreamSliderBackImageSecond.classList.remove('back-picture-yellow');
            iceCreamSliderBackImage.classList.add('back-picture-blue');
            iceCreamSliderBackImageFirst.classList.add('back-picture-blue');
            iceCreamSliderBackImageSecond.classList.add('back-picture-blue');
            iceCreamSliderLittleImageFirst.src = 'src/images/white-little-ice-cream.png';
            iceCreamSliderLittleImageSecond.src = 'src/images/red-little-ice-cream.png';
            iceCreamSliderBulletSecond.classList.add('current-bullet');
            currentPage = 1;
        }
    });
    iceCreamSliderRightArrow.addEventListener('click', (evt) => {
        evt.preventDefault();
        iceCreamSliderBulletFirst.classList.remove('current-bullet');
        iceCreamSliderBulletSecond.classList.remove('current-bullet');
        iceCreamSliderBulletThird.classList.remove('current-bullet');
        if (currentPage === 0) {
            body.style.backgroundColor = '#69A9FF';
            iceCreamSliderBigImage.src = 'src/images/yellow-big-ice-cream.png';
            iceCreamSliderBackImage.classList.remove('back-picture-red');
            iceCreamSliderBackImageFirst.classList.remove('back-picture-red');
            iceCreamSliderBackImageSecond.classList.remove('back-picture-red');
            iceCreamSliderBackImage.classList.add('back-picture-blue');
            iceCreamSliderBackImageFirst.classList.add('back-picture-blue');
            iceCreamSliderBackImageSecond.classList.add('back-picture-blue');
            iceCreamSliderLittleImageFirst.src = 'src/images/white-little-ice-cream.png';
            iceCreamSliderLittleImageSecond.src = 'src/images/red-little-ice-cream.png';
            iceCreamSliderBulletSecond.classList.add('current-bullet');
            currentPage = 1;
        } else if (currentPage === 1) {
            body.style.backgroundColor = '#FCC850';
            iceCreamSliderBigImage.src = 'src/images/white-big-ice-cream.png'
            iceCreamSliderBackImage.classList.remove('back-picture-blue');
            iceCreamSliderBackImageFirst.classList.remove('back-picture-blue');
            iceCreamSliderBackImageSecond.classList.remove('back-picture-blue');
            iceCreamSliderBackImage.classList.add('back-picture-yellow');
            iceCreamSliderBackImageFirst.classList.add('back-picture-yellow');
            iceCreamSliderBackImageSecond.classList.add('back-picture-yellow');
            iceCreamSliderLittleImageFirst.src = 'src/images/red-little-ice-cream.png';
            iceCreamSliderLittleImageSecond.src = 'src/images/yellow-little-ice-cream.png';
            iceCreamSliderBulletThird.classList.add('current-bullet');
            currentPage = 2;
        } else if (currentPage === 2) {
            body.style.backgroundColor = '#feafc3';
            iceCreamSliderBigImage.src = 'src/images/red-big-ice-cream.png'
            iceCreamSliderBackImage.classList.remove('back-picture-yellow');
            iceCreamSliderBackImageFirst.classList.remove('back-picture-yellow');
            iceCreamSliderBackImageSecond.classList.remove('back-picture-yellow');
            iceCreamSliderBackImage.classList.add('back-picture-red');
            iceCreamSliderBackImageFirst.classList.add('back-picture-red');
            iceCreamSliderBackImageSecond.classList.add('back-picture-red');
            iceCreamSliderLittleImageFirst.src = 'src/images/yellow-little-ice-cream.png';
            iceCreamSliderLittleImageSecond.src = 'src/images/white-little-ice-cream.png';
            iceCreamSliderBulletFirst.classList.add('current-bullet');
            currentPage = 0;
        }
    });
};

iceCreamSliderSwitch();