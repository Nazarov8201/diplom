var swiper = new Swiper(".slider-book", {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      centeredSlides: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 4,
        },
      },
    });

    var swiper = new Swiper(".slider-new-book", {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      centeredSlides: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 4,
        },
      },
    });

    var swiper = new Swiper(".slider-spe", {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      centeredSlides: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 4,
        },
      },
    });


    let mask = document.querySelector('.mask');

    window.addEventListener('load', () => {
      mask.classList.add('hide');
      setTimeout(() => {
        mask.remove();
      }, 600);
    });

