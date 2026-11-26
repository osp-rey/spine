export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 900,
      autoplay: {
        delay: 6000,
      },
      effect: "fade",
      navigation: {
        prevEl: ".s-hero .slider-arrow._prev",
        nextEl: ".s-hero .slider-arrow._next",
      },
      pagination: {
        el: ".s-hero .slider-pagination",
        clickable: true,
      },
    });
  }

  const aboutSlider = document.querySelector(".s-about__slider");
  if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 15,
      autoplay: {
        delay: 6000,
      },
      navigation: {
        prevEl: aboutSlider.querySelector(".slider-arrow._prev"),
        nextEl: aboutSlider.querySelector(".slider-arrow._next"),
      },
      pagination: {
        el: ".s-about__slider-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      },
    });
  }

  const aboutAdvSlider = document.querySelector(".s-about__adv-slider");
  if (aboutAdvSlider) {
    const swiper = new Swiper(aboutAdvSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 6000,
      },
      navigation: {
        prevEl: ".s-about__adv .slider-arrow._prev",
        nextEl: ".s-about__adv .slider-arrow._next",
      },
      pagination: {
        el: ".s-about__adv .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1540: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1026: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }
}
