  
   var swiper = new Swiper(".slided-content", {
        slidesPerView: 3,
        spaceBetween: 25,      
        loop: true,
      centerSlide:'true',
      fade:'true',
      grabCursor:'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets:true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
        
          0:
          {
            slidesPerView:1
          },
          934:
          {
            slidesPerView:1
          },
          1095:
          {
            slidesPerView:3
          }
        }
      });