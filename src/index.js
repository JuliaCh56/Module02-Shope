import 'normalize.css';
  // import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

// подключение swiper
import Swiper, { Navigation, Pagination } from 'swiper';


  var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });

  var swiper = new Swiper(".trendsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });