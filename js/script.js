jQuery('document').ready(function() {

    function footerToBottom() {
        var browserHeight = jQuery(window).height(),
            footerOuterHeight = jQuery('footer').outerHeight(true),
            mainHeightMarginPaddingBorder = jQuery('#main').outerHeight(true) - jQuery('#main').height();
        jQuery('#main').css({
            'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder - 150,
        });
    };
    footerToBottom();
    jQuery(window).resize(function() {
        footerToBottom();
    });


////////////////////////
   jQuery(".menu a").click(function() {
    var selected = jQuery(this).attr('href');
    jQuery.scrollTo(selected, 700, { offset: function() { return { top: -129 }; } });
    jQuery('.menu_button').removeClass('active');
    jQuery(".menu >li").removeClass('active');
    jQuery(this).parents(".menu >li").addClass('active');
    jQuery('.mobile_menu_wrapp').animate({left:'-1000px'},500);
    return false;
  });
////////////////////////
jQuery("a.scroll_To").click(function() {
    var selected = jQuery(this).attr('href');
    jQuery.scrollTo(selected, 700, { offset: function() { return { top: -129 }; } });
    jQuery('.menu_button').removeClass('active');
    jQuery(".menu >li").removeClass('active');
    jQuery(this).parents(".menu >li").addClass('active');
    jQuery('.mobile_menu_wrapp').animate({left:'-1000px'},500);
    return false;
  });
////////////////////////

    function init() {
        window.addEventListener('scroll', function(e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 50,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header, "smaller");
            } else {
                if (classie.has(header, "smaller")) {
                    classie.remove(header, "smaller");
                }
            }
        });
        window.addEventListener('load', function(e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header, "smaller");
            } else {
                if (classie.has(header, "smaller")) {
                    classie.remove(header, "smaller");
                }
            }
        });
    }
    window.onload = init();
    ////////////////////////////
    //jQuery('input[name="phone"]').mask("+7 (999) 999-99-99");
    ////////////////////////////
    //jQuery('.item_title').matchHeight();
    /////////////////////////////

    jQuery(window).scroll(function() {

        if (jQuery(this).scrollTop() != 0) {

            jQuery('#toTop').fadeIn();

        } else {

            jQuery('#toTop').fadeOut();

        }

    });

    jQuery('#toTop').click(function() {

        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);

    });
    ///////////////////////////////////////////



    // jQuery(function(){
    //      var current_page_URL = location.href;

    //      jQuery( ".main_menu .navbar-nav .nav-item> a" ).each(function() {

    //          if (jQuery(this).attr("href") !== "#") {

    //              var target_URL = jQuery(this).prop("href");

    //                  if (target_URL == current_page_URL) {
    //                      jQuery('nav a').parents('li, ul').removeClass('active');
    //                      jQuery(this).parent('li').addClass('active');

    //                      return false;
    //                  }
    //          }
    //      }); 
    //    }); 

    //////////////////////////////////


///////////////////////////
var swiper = new Swiper('.steps_slider', {
  speed: 800,
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 10,
  grabCursor: true,
   slidesPerView: "auto",
   freeMode: true,


  //Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 6
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1376: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
jQuery('.menu_button').click(function(){
  jQuery(this).toggleClass('active');
});
////////////////////////////////////////////
jQuery('.menu_show,.menu_close').click(function(){
  if(jQuery('.mobile_menu_wrapp').css('left') == '-1000px') {
    jQuery('.mobile_menu_wrapp').animate({left:'0px'},500);
    return false;
    }
  if(jQuery('.mobile_menu_wrapp').css('left') == '0px') {
    jQuery('.menu_button').removeClass('active');
    jQuery('.mobile_menu_wrapp').animate({left:'-1000px'},500);
    return false;
    }
})
////////////////////////////////////
jQuery(document).click(function(e){
  if (jQuery(e.target).closest(".menu_show,.mobile_menu_wrapp").length) return;
  jQuery('.mobile_menu_wrapp').css('left','-1000');
  jQuery('.mobile_menu_wrapp').animate({left:'-1000px'},500);
  jQuery('.menu_button').removeClass('active');
  e.stopPropagation();
  });
/////////////////////////////////////
new WOW().init();
////////////////////////////


     // Слайдер миниатюр
    var thumbs = new Swiper('.swiper-thumbs', {
      spaceBetween: 15,
      slidesPerView: 10,
      freeMode: true,
      watchSlidesProgress: true,
    });

    // Основной слайдер
    var main = new Swiper('.swiper-main', {
      spaceBetween: 10,
       navigation: {
        nextEl: "#swiper_reviews_1  .swiper-button-next",
        prevEl: "#swiper_reviews_1  .swiper-button-prev",
      },
      thumbs: {
        swiper: thumbs,
       
      },
    });

    // Собираем всех Vimeo-плееров
    var iframes = document.querySelectorAll('.swiper-main iframe');
    var players = Array.from(iframes).map(el => new Vimeo.Player(el));

    // Останавливаем видео при смене слайда
    main.on('slideChange', () => {
      players.forEach(player => {
        player.pause().catch(() => {});
      });
    });



////////////////////////
///  // Слайдер миниатюр
    const thumbs2 = new Swiper('.swiper-thumbs-2', {
      spaceBetween: 10,
      slidesPerView: 10,
      freeMode: true,
      watchSlidesProgress: true,
    });

    // Основной слайдер
    const main2 = new Swiper('.swiper-main-2', {
      spaceBetween: 10,
       navigation: {
        nextEl: "#swiper_reviews_2 .swiper-button-next",
        prevEl: "#swiper_reviews_2 .swiper-button-prev",
      },
      thumbs: {
        swiper: thumbs2,
      },
    });

    // Собираем всех Vimeo-плееров
    const iframes2 = document.querySelectorAll('.swiper-main-2 iframe');
    const players2 = Array.from(iframes2).map(el => new Vimeo.Player(el));

    // Останавливаем видео при смене слайда
    main2.on('slideChange', () => {
      players2.forEach(player => {
        player.pause().catch(() => {});
      });
    });

///////////////////////////

///////////////////////////////////////odometer//////////////////////////////////////
  window.odometerOptions = {
    auto: true,
    format: '(,ddd)', 
    duration: 3000, 
    animation: 'count'
};
var valueSet = {};
jQuery(document).ready(function () {
    if (jQuery('.js-odometer-number').length) {
        iterateOdometer('.js-odometer-number');
    }
});

jQuery(window).scroll(function () {
    if (jQuery('.js-odometer-number').length) {
        iterateOdometer('.js-odometer-number');
    }
});    
function iterateOdometer(selector) {
    var stats = document.querySelectorAll(selector);
    for (i = 0; i < stats.length; i++) {
        var element = stats[i];
        if (!valueSet[i]) {
            setOdometerValue(element, i);
        }
    }
}
function setOdometerValue(element, index) {
    var dataValue = element.getAttribute('data-odom-number');
    var isElementInView = Utils.isElementInView(element, false);
    if (isElementInView) {
        //element.html(dataValue);
        od = new Odometer({
            el: element,
            value: dataValue,
            // Any option (other than auto and selector) can be passed in here
            format: '(,ddd)'
        });
        od.update(dataValue);
        valueSet[index] = true;
    } 
}
function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = jQuery(window).scrollTop();
        var pageBottom = pageTop + jQuery(window).height();
        var elementTop = jQuery(element).offset().top;
        var elementBottom = elementTop + jQuery(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};
var Utils = new Utils();
///////////////////////////////////odometer//////////////////////////////////////////

////////////////////////
 var swiper = new Swiper(".healers_slider", {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: "row",    
      },
      spaceBetween: 10,
      pagination: {
        el: ".healers_slider .swiper-pagination",
        clickable: true,
      },
        //Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: "row",    
      }
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: "row",    
      }
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",    
      }
    },
    1376: {
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: "row",    
      }
    },
    1600: {
     slidesPerView: 6,
      grid: {
        rows: 2,
        fill: "row",    
      }
    }
  }
    });
////////////////////////
  var swiper = new Swiper(".shamans_slider", {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: "row",    
      },
      spaceBetween: 10,
      pagination: {
        el: ".shamans_slider .swiper-pagination",
        clickable: true,
      },
        //Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: "row",    
      }
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: "row",    
      }
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",    
      }
    },
    1376: {
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: "row",    
      }
    },
    1600: {
     slidesPerView: 6,
      grid: {
        rows: 2,
        fill: "row",    
      }
    }
  }
    });
////////////////////////
 // Слайдер миниатюр
    var thumbs3 = new Swiper('.image_swiper_thumbs', {
      spaceBetween: 15,
      slidesPerView: 10,
      freeMode: true,
      //watchOverflow: true,
      //loop: true,
      watchSlidesProgress: true,
      //  navigation: {
      //   nextEl: ".image_swiper_thumbs_next",
      //   prevEl: ".image_swiper_thumbs_prev",
      // },
    });

    // Основной слайдер
    var main3 = new Swiper('.image_swiper_main', {
      spaceBetween: 10,
       loop: true,
       watchOverflow: true,
       navigation: {
        nextEl: ".gallery .button-next",
        prevEl: ".gallery .button-prev",
      },
      thumbs: {
        swiper: thumbs3,
       
      },
    });
////////////////////////
 if (jQuery('body').hasClass('home')) {
       jQuery('.home_menu').show();
        jQuery('.inner_page_menu').hide();
    } else {
        jQuery('.home_menu').hide();
        jQuery('.inner_page_menu').show();
    }

///////////////////////////////
// jQuery(document).on('click', '.button_play_video', function() {
//   var jQueryvideo = jQuery(this).parent('.video_inner').find('.video_iframe'),
//     src = jQueryvideo.attr('src');
 
//   jQueryvideo.attr('src', src + '&autoplay=1&mute=1');
//     jQuery(this).fadeOut();
// });
/////////////////////////////////////////

////////////////////////

//   (function($) {
    
//     $(document).on('input', '#user-phone, #user-phone-confirm', function() {
//         var $phone = $('#user-phone');
//         var $confirm = $('#user-phone-confirm');
//         var $errorMsg = $('#phone-error');
//         var $submit = $('.wpcf7-submit');

//         var val1 = $phone.val();
//         var val2 = $confirm.val();

      
//         if (val1 !== val2 && val2.length > 0) {
//             $confirm.css('border', '2px solid red');
//             $errorMsg.show();
//             $submit.prop('disabled', true);
//         } else {
//             $confirm.css('border', '');
//             $errorMsg.hide();
//             $submit.prop('disabled', false);
//         }
//     });
// })(jQuery);

/////////////////////

/////////////////////
var swiper = new Swiper(".shedule_slider", {
       freeMode: true,
       slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
      navigation: {
        nextEl: ".next_but_4",
        prevEl: ".prev_but_4",
      },
    });


//////
 var swiper = new Swiper(".сoverflow_slider", {
      slidesPerView: 5,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      //Responsive breakpoints
  breakpoints: {
    
    320: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1376: {
     slidesPerView: 7,
      spaceBetween: -30,
     // centeredSlides: true,
      freeMode: true,
      loop: true,
      autoPlay: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    }
  }
    });

////////////////////////

//   (function($) {
   
//     $(document).on('input', '#user-phone, #user-phone-confirm', function() {
//         var $phone = $('#user-phone');
//         var $confirm = $('#user-phone-confirm');
//         var $errorMsg = $('#phone-error');
//         var $submit = $('.wpcf7-submit');

//         var val1 = $phone.val();
//         var val2 = $confirm.val();

      
//         if (val1 !== val2 && val2.length > 0) {
//             $confirm.css('border', '2px solid red');
//             $errorMsg.show();
//             $submit.prop('disabled', true);
//         } else {
//             $confirm.css('border', '');
//             $errorMsg.hide();
//             $submit.prop('disabled', false);
//         }
//     });
// })(jQuery);

/////////////////////

  var swiper = new Swiper(".testimonials_slider", {
      slidesPerView: 6,
      spaceBetween: 15,
      freeMode: true,
      navigation: {
        nextEl: ".next_but_3",
        prevEl: ".prev_but_3",
      },
      slidesPerView: 'auto',
    });


////////////////////////
// Слайдер миниатюр
var thumbs4 = new Swiper('.image_swiper_thumbs_lp', {
  spaceBetween: 5,
  slidesPerView: 10,
  direction: "vertical",
  watchSlidesProgress: true,
});

// Основной слайдер
var main4 = new Swiper('.image_swiper_main_lp', {
  spaceBetween: 10,
  watchOverflow: true,
  navigation: {
    nextEl: ".gallery .button-next",
    prevEl: ".gallery .button-prev",
  },
  thumbs: {
    swiper: thumbs4,
  },
  on: {
    init: function () {
      setTimeout(updateProgramContent, 100); // немного подождём
    },
    slideChange: updateProgramContent,
  },
});
///////////////////////
// Контент программы
const programData = {
  1: `
<ul class="grafic_info">
<li>8:00 <span class="mr-3 ml-3">-</span> Întâlnire la aeroport</li>
<li>10:00 <span class="mr-3 ml-3">-</span> Cazare la hotel</li>
<li>18:30 <span class="mr-3 ml-3">-</span> Cină</li>
<li>20:00 <span class="mr-3 ml-3">-</span> Întâlnire introductivă cu Victor Alexeev</li>
<li>23:00 <span class="mr-3 ml-3">-</span> Odihnă</li>
</ul>
  `,
  2: `
   <ul class="grafic_info">
<li>09:00 <span class="mr-3 ml-3">-</span> Mic dejun</li>
<li>12:00 <span class="mr-3 ml-3">-</span> Prânz dietetic</li>
<li>12:30 <span class="mr-3 ml-3">-</span> Integrare cu Victor Alexeev</li>
<li>16:00 până la 16:30 <span class="mr-3 ml-3">-</span> Cină ușoară</li>
<li>17:00 până la 21:00 <span class="mr-3 ml-3">-</span> Odihnă</li>
<li>21:00 până la 03:00 <span class="mr-3 ml-3">-</span> Prima ceremonie Ayahuasca</li>
</ul>
  `,
  3: `
  <ul class="grafic_info">
<li>09:00 <span class="mr-3 ml-3">-</span> Mic dejun</li>
<li>12:00 <span class="mr-3 ml-3">-</span> Prânz dietetic</li>
<li>12:30 <span class="mr-3 ml-3">-</span> Integrare cu Victor Alexeev</li>
<li>16:00 până la 16:30 <span class="mr-3 ml-3">-</span> Cină ușoară</li>
<li>17:00 până la 21:00  <span class="mr-3 ml-3">-</span> Excursie în satul șamanic al tribului Tsáchila </li>
<li>21:00 până la 03:00 <span class="mr-3 ml-3">-</span> A doua ceremonie Ayahuasca</li>
</ul>
  `,
  4: `
   <ul class="grafic_info">
<li>12:00 <span class="mr-3 ml-3">-</span> Mic dejun la hotel</li>
<li>12:30 <span class="mr-3 ml-3">-</span> Cazare în căsuțe</li>
<li>16:00 până la 16:30 <span class="mr-3 ml-3">-</span> Cină ușoară</li>
<li>17:00 până la 21:00 <span class="mr-3 ml-3">-</span> Odihnă</li>
<li>21:00 până la 03:00 <span class="mr-3 ml-3">-</span> A treia ceremonie Ayahuasca</li>
</ul>
  `,
  5: `
    <ul class="grafic_info">
<li>08:30 până la 09:00 <span class="mr-3 ml-3">-</span> Mic dejun dietetic</li>
<li>09:00 până la 12:00 <span class="mr-3 ml-3">-</span> Odihnă</li>
<li>12:00 <span class="mr-3 ml-3">-</span> Ceremonia cactusului San Pedro</li>
<li>17:30 până la 18:00 <span class="mr-3 ml-3">-</span> Cină</li>
<li>18:00-21:00 <span class="mr-3 ml-3">-</span> Odihnă</li>
</ul>
  `,
  6: `
   <ul class="grafic_info">
<li>08:30 până la 09:00 <span class="mr-3 ml-3">-</span> Mic dejun dietetic</li>
<li>10:00 <span class="mr-3 ml-3">-</span> Excursie la cascadă</li>
<li>00 <span class="mr-3 ml-3">-</span> Prânz la cascadă sau în satul șamanic</li>
<li>00 <span class="mr-3 ml-3">-</span> Odihnă</li>
<li>00 <span class="mr-3 ml-3">-</span> Ceremonia Chonto Kuru (Malun)</li>
<li>17:30 până la 18:00 <span class="mr-3 ml-3">-</span> Cină</li>
<li>18:00 <span class="mr-3 ml-3">-</span> Integrare cu Victor Alexeev</li>
</ul>
  `,
  7: `
   <ul class="grafic_info">
<li>08:30 până la 09:00 <span class="mr-3 ml-3">-</span> Mic dejun dietetic</li>
<li>09:00 până la 12:00 <span class="mr-3 ml-3">-</span> Odihnă</li>
<li>12:00 <span class="mr-3 ml-3">-</span> Ceremonia ciupercilor</li>
<li>17:30 până la 18:00 <span class="mr-3 ml-3">-</span> Cină</li>
</ul>
  `,
  8: `
    <ul class="grafic_info">
<li>08:30 până la 09:00 <span class="mr-3 ml-3">-</span> Mic dejun dietetic</li>
<li>09:00 până la 12:00 <span class="mr-3 ml-3">-</span> Odihnă</li>
<li>12:00 <span class="mr-3 ml-3">-</span> Ceremonia ciupercilor</li>
<li>17:30 până la 18:00 <span class="mr-3 ml-3">-</span> Cină</li>
</ul>
  `,
  9: `
  <ul class="grafic_info">
<li>08:30 până la 09:00 <span class="mr-3 ml-3">-</span> Mic dejun dietetic</li>
<li>09:00 până la 12:00 <span class="mr-3 ml-3">-</span> Odihnă</li>
<li>12:00 <span class="mr-3 ml-3">-</span> Ceremonia ciupercilor</li>
<li>17:30 până la 18:00 <span class="mr-3 ml-3">-</span> Cină</li>
</ul>
  `,
  10: `
   <ul class="grafic_info">
<li>08:00 până la 10:00 <span class="mr-3 ml-3">-</span> Mic dejun la hotel </li>
<li>10:00 până la 12:00 <span class="mr-3 ml-3">-</span> Excursie în Quito (opțional)</li>
<li>12:00 <span class="mr-3 ml-3">-</span> Check-out din hotel</li>
<li>12:30 <span class="mr-3 ml-3">-</span> Transfer la aeroport</li>
</ul>
  `,
};

// =====================
// Обновление контента
function updateProgramContent() {
  // убедимся, что слайдер готов
  if (!main4 || !main4.slides || main4.slides.length === 0) return;

  const activeSlide = main4.slides[main4.activeIndex];
  if (!activeSlide) return;

  // Определяем номер дня
  let day = activeSlide.getAttribute("data-day");
  if (!day) {
    // fallback: индекс + 1
    day = (parseInt(activeSlide.getAttribute("data-swiper-slide-index")) || main4.activeIndex) % 10 + 1;
  }

  const progWrap = document.querySelector(".prog_wrap_dinamic_content");
  if (!progWrap) return;

  // Подставляем контент с плавной анимацией
  if (programData[day]) {
    progWrap.style.opacity = "0";
    setTimeout(() => {
      progWrap.innerHTML = programData[day];
      progWrap.style.opacity = "1";
    }, 300);
  }
}
////////////////////////

////////////////////////
var swiper = new Swiper(".testimonials_slider_light", {
      slidesPerView: 6,
      spaceBetween: 15,
      freeMode: true,
      navigation: {
       nextEl: ".reviews_text_slider_navigation .next_but_2",
       prevEl: ".reviews_text_slider_navigation .prev_but_2",
      },
      slidesPerView: 'auto',
    });

/////////////////////
jQuery('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close"
    ],
    youtube : {
      controls : 1,
      showinfo : 0
    }
  });
  ///////////////
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('wpcf7-submit')) {
        const button = e.target;
        
        // Создаем небольшую задержку, чтобы форма успела инициировать отправку
        setTimeout(() => {
            button.disabled = true;
            button.style.opacity = '0.5';
            button.style.cursor = 'not-allowed';
        }, 50);

        // Включаем кнопку обратно через 5 секунд на случай ошибки сети
        setTimeout(() => {
            button.disabled = false;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        }, 5000);
    }
});
/////////////

















});