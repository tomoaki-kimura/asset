// ==============================================================
// スクロールでanimatedを発火
// ==============================================================
//acs.js
(function ($) {
  $.fn.acs = function (options) {

    var elements = this;
    var defaults = {
      screenPos: 0.8,
      className: 'fadeInUp animated',
      each: false
    };
    var setting = $.extend(defaults, options);

    $(window).on('load scroll', function () {
      if (setting.each) {
        add_class_in_scrolling_each();
      } else {
        add_class_in_scrolling();
      }
    });

    function add_class_in_scrolling() {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * setting.screenPos);
      var elePos = elements.offset().top;

      if (elePos < scrollPos) {
        elements.addClass(setting.className);
      }
    }

    function add_class_in_scrolling_each() {
      $(elements).each(function () {
        var winScroll = $(window).scrollTop();
        var winHeight = $(window).height();
        var scrollPos = winScroll + (winHeight * setting.screenPos);
        var thisPos = $(this);
        var elePos = thisPos.offset().top;

        if (elePos < scrollPos) {
          thisPos.addClass(setting.className);
        }
      });
    }

  }
})(jQuery);

// acsの起動 ※各ページで展開してください
$(function () {
  //.animateのセット(.animateでvisiblity:hidden)
  $('.animate01 , .animate02').addClass('animate');

  $('.animate01').acs({
    screenPos: 0.8,
    className: 'fadeInUp animated',
    each: true
  });

  $('.animate02').acs({
    screenPos: 0.8,
    className: 'fadeIn animated',
    each: true
  });

});
