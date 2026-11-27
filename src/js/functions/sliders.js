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
        delay: 5500,
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

  const servicesSliders = document.querySelectorAll(".s-services__slider");
  if (
    servicesSliders.length &&
    window.matchMedia("(max-width: 576px)").matches
  ) {
    servicesSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 15,
        slidesPerView: "auto",
        autoplay: {
          delay: 6000,
        },
        scrollbar: {
          el: ".s-services .slider-scrollbar",
          draggable: true,
        },
      });
    });
  }

  const teamSlider = document.querySelector(".s-team__slider");

  if (teamSlider) {
    const swiper = new Swiper(teamSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 15,
      autoplay: {
        delay: 6000
      },
      navigation: {
        prevEl: ".s-team .slider-arrow._prev",
        nextEl: ".s-team .slider-arrow._next",
      },
      scrollbar: {
        el: ".s-team .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });
  }
}
