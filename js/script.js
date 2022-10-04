let slideIndex = 1;
let offset = 0;



const slides = document.querySelectorAll('.my-slide'),
      slider = document.querySelector('.my-carusel'),
      slidesWrapper = document.querySelector('.my-carusel-wrapper'),
      slidesInner = document.querySelector('.my-carusel-inner'),
      width = window.getComputedStyle(slidesWrapper).width;

slidesInner.style.width = 100 * slides.length + '%';
slidesInner.style.display = 'flex';
slidesInner.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
    slide.style.width = width;
});

slider.style.position = 'relative';

const indicators = document.createElement('ol'),
dots = [];
indicators.classList.add('carousel-indicators');
indicators.style.cssText = `
     position: absolute;
     right: 0;
     bottom: 0;
     padding-left: 10px;
     z-index: 15;
     display: flex;
     justify-content: center;
     margin-right: 15%;
     margin-left: 29%;
     margin-bottom: 3%;
     list-style: none;
     
 `;
slider.append(indicators);

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;
    if (i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        offset = +width.slice(0, width.length - 2) * (slideTo - 1);

        slidesInner.style.transform = `translateX(-${offset}px)`;

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });
});