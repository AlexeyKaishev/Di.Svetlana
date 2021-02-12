/*-----------BURGER------------*/
$(document).ready(function() {
	$('.catalogue').click(function(event) {
		$('.mobile__menu_overlay').toggleClass('DBlock');
		$('.mobile__menu_container').toggleClass('loaded');
		$('body').toggleClass('lock');
		$('.burger').toggleClass('active');
		});
	$('.mobile__menu_menu-first').click(function(event) {
		$('.menu-first').toggleClass('loaded');
	});
	$('.mobile__menu_menu-second').click(function(event) {
		$('.menu-second').toggleClass('loaded');
	});
	$('.back').click(function(event) {
		$('.menu-first').removeClass('loaded');
		$('.menu-second').removeClass('loaded');
	});
	/*Пробую убрать меню кликом по бэкграунду*/
	$('.mobile__menu_overlay').click(function(event) {
		$('.mobile__menu_overlay').removeClass('DBlock');
		$('.mobile__menu_container').removeClass('loaded');
		$('.burger').removeClass('active');

		});
});

/*----------/BURGER------------*/

// Инициализируем Swiper
let mySwiper = new Swiper('.top-slider', {
    speed: 400,
    centeredSlides: true,
      /*autoplay: {    -----Автопрокрутка
        delay: 5000,
        disableOnInteraction: false,
      },*/
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        progressbarOpposite: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

// Второй слайдер // 

var secondSwiper = new Swiper('.bouquet-slider', {
	    //slidesPerView: 1,
       //spaceBetween: 2,
    speed: 1500,
    autoplay: {    //-----Автопрокрутка
        delay: 3000,
        disableOnInteraction: false,
      },
    //spaceBetween: 100
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        progressbarOpposite: true,
      },
      on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
      breakpoints: {
      	320: {
      		slidesPerView: 2,
          spaceBetween: 2,
          slidesPerGroup: 2,
      	},
        640: {
          slidesPerView: 2,
          spaceBetween: 2,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 2,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 1,
          slidesPerGroup: 4,
        },
      }
});



// третий слайдер

var thirdSwiper = new Swiper('.third-swiper-container', {
      //slidesPerView: 1,
       //spaceBetween: 2,
    speed: 1500,
    autoplay: {    //-----Автопрокрутка
        delay: 3000,
        disableOnInteraction: false,
      },
    //spaceBetween: 100
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        progressbarOpposite: true,
      },
 on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 2,
          slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 2,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 2,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 2,
          slidesPerGroup: 4,
        },
      },
});

// четвертый слайдер // 


