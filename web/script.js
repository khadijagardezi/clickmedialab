document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector('.ticker-track');
  track.innerHTML += track.innerHTML;
});

// 
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.cards-swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',       
    spaceBetween: 20,      
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      init(swiper) {
        swiper.el.style.padding = '0 calc(40% - 100px)';
        swiper.el.style.boxSizing = 'content-box';
        swiper.el.style.overflow = 'visible';
      }
    }
  });
});

