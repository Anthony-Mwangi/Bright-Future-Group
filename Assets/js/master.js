$(document).ready(function() {

  (function CheckTop() {
    var scroll = $(this).scrollTop();
    var offset = $("#the_top").offset().top;
    if (scroll >= offset) {
      if ($(".fixed_nav").hasClass("hidden")) {
        $(".fixed_nav").removeClass("hidden");
      }
    }else {
      if (!$(".fixed_nav").hasClass("hidden")) {
        $(".fixed_nav").addClass("hidden");
      }
    }
  }());



  $("#ham_fixed").click(function () {
    var $link = $(".links_fixed");
    $link.slideToggle();
  });

  $("#ham_main").click(function () {
    var $lnk = $(".links_main");
    $lnk.slideToggle();
  });


  $(".anime").click(function () {
    var tg = $(this).attr('target');
    if( tg.length ) {
      var top = $(tg).offset().top;
      $("body,html").stop().animate({
        scrollTop: top
      }, 1200);
    }
  });


  $(this).scroll(function() {
    var scroll = $(this).scrollTop();
    var offset = $("#the_top").offset().top;
    if (scroll >= offset) {
      if ($(".fixed_nav").hasClass("hidden")) {
        $(".fixed_nav").removeClass("hidden");
      }
    }else {
      if (!$(".fixed_nav").hasClass("hidden")) {
        $(".fixed_nav").addClass("hidden");
      }
    }
  });
});
