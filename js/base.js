"use strict";

/*==================================================================
    getBrows
===================================================================*/
var getBrows = function getBrows() {
  "use strict";

  var _ua = window.navigator.userAgent;

  var _uaSp = window.navigator.userAgent.toLowerCase();

  var version = window.navigator.appVersion.toLowerCase();
  /* browser
  -------------------- */

  if (version.indexOf("msie 9.") > -1) {
    document.querySelector('body').classList.add('ie9');
    scriptHead();
  } else if (version.indexOf("msie 10.") > -1) {
    document.querySelector('body').classList.add('ie10');
    scriptHead();
  } else if (version.indexOf("trident/7") > -1) {
    document.querySelector('body').classList.add('ie11');
    scriptHead();
  } else if (_ua.indexOf("Edge") > -1) {
    document.querySelector('body').classList.add('edge');
    scriptHead();
  } else if (_ua.indexOf("Firefox") > -1) {
    document.querySelector('body').classList.add('firefox');
  } else if (_ua.indexOf("Chrome") > -1) {
    document.querySelector('body').classList.add('chrome');
  } else if (_ua.indexOf("Opera") > -1) {
    document.querySelector('body').classList.add('opera');
  } else if (_ua.indexOf("Safari") > -1) {
    document.querySelector('body').classList.add('safari');
  } else {
    document.querySelector('body').classList.add('other');
  }
  /* moblie
  -------------------- */
  if (_uaSp.indexOf('iphone') !== -1) {
    document.querySelector('body').classList.add('iphone');
  } else if (_uaSp.indexOf('ipad') !== -1) {
    document.querySelector('body').classList.add('ipad');
  } else if (_uaSp.indexOf('android') !== -1) {
    if (_uaSp.indexOf('mobile') !== -1) {
      document.querySelector('body').classList.add('android');
    } else {
      document.querySelector('body').classList.add('androidTablet');
    }
  }
  /* ユーザーエージェントでbodyに.pc .spを付与
  -------------------- */
  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    document.querySelector('body').classList.add('pc');
    document.querySelector('body').classList.remove('sp');
  } else {
    document.querySelector('body').classList.add('sp');
    document.querySelector('body').classList.remove('pc');
  }
  return false;
};

document.addEventListener("readystatechange", function () {
  getBrows();
}); // window.addEventListener('resize', () => {
//     getBrows();
// });

/*  scriptHead
---------------------------------------------*/
var scriptHead = function scriptHead() {
  var script = document.createElement('script');
  script.src = "/asset/js/picturefill.min.js";
  document.head.appendChild(script);
};

/*==================================================================
    pagetop
===================================================================*/



/*==================================================================
    global Nav
===================================================================*/
$('.menu-trigger').on('click', function () {
  "use strict";
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.nav').removeClass('open');
  } else {
    $(this).addClass('active');
    $('.nav').addClass('open');
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $('.header_trigger').addClass('scrolled');
  } else {
    $('.header_trigger').removeClass('scrolled');
  }
});


/*==================================================================
    firstload
    ※初回読み込み時のCSSトランジション防止
===================================================================*/
window.onload = function () {
  "use strict";

  setTimeout(function () {
    var elements = document.querySelectorAll(".firstload");
    elements.forEach(function (e) {
      e.classList.remove('firstload');
    });
  }, 1000);
};

/*==================================================================
    アンカーに＃つけない
===================================================================*/
var headerHeight = $('.header').outerHeight();
var urlHash = location.hash;
if (urlHash) {
  $('body,html').stop().scrollTop(0);
  setTimeout(function () {
    var target = $(urlHash);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({ scrollTop: position }, 500);
  }, 500);
}
$('a[href^="#"]').click(function () {
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - headerHeight;
  $("html, body").animate({ scrollTop: position }, speed, "swing");
  return false;
});

/*==================================================================
    urlFixHeader
    #つきのページ遷移時に追従ヘッダー分の高さをマイナス
===================================================================*/
var urlFixHeader = function urlFixHeader() {
  "use strict";
  var headerHeight = $('.header').outerHeight();
  var urlHash = location.hash;
  if (urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      var target = $(urlHash);
      var position = target.offset().top - (headerHeight + 300);
      $('body,html').stop().animate({
        scrollTop: position
      }, 0);
    }, 100);
  }
};
document.addEventListener("readystatechange", function () {
  urlFixHeader();
});

/*==================================================================
    slick
===================================================================*/
$(function () {
  $('.slide').slick({
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  // $('.slide').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //   if (nextSlide > 0) { //スライド1枚目以外
  //     $('.slide').slick('slickSetOption', 'autoplaySpeed', 6000, true);
  //   } else { //2周目以降のスライド1枚目
  //     $('.slide').slick('slickSetOption', 'autoplaySpeed', 6000, true);
  //   }
  // });
});
$(".slide").on("init", function (event, slick) {
  var $self = $(this);
  setTimeout(function () {
    $self.slick("slickSetOption", "autoplay", true, true);
    $self.addClass("active");
  }, 5000);
});

/*==================================================================
    100vhの処理
===================================================================*/
$(document).ready(function () {
  var hSize = $(window).height();
  $('.mainView').height(hSize);
  $('.mainView_item').height(hSize);
});
$(window).resize(function () {
  var hSize = $(window).height();
  $('.mainView').height(hSize);
  $('.mainView_item').height(hSize);
});
