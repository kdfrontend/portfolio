var navPosition = $(".menu").offset().top;

$(window).scroll(function() {
   var navTop = $(window).scrollTop();
   if (navPosition < navTop) {
      $(".menu").addClass("fixed");
   } else {
      $(".menu").removeClass("fixed");
   }
});

var headerHeight = $(".menu").outerHeight();
$(".nav-animate").click(function(e) {
   var linkHref = $(this).attr("href");
   if ($(window).outerWidth() >= 992) {
      $("html, body").animate(
         {
            scrollTop: $(linkHref).offset().top - headerHeight + 20
         },
         1000
      );
   } else {
      $("html, body").animate(
         {
            scrollTop: $(linkHref).offset().top
         },
         1000
      );
   }
   e.preventDefault();
});

$(window).on("scroll", function() {
   var currentTop = $(window).scrollTop();
   var elems = $(".section");
   var headerHeight = $(".menu").outerHeight();
   elems.each(function(index) {
      if ($(window).outerWidth() >= 992) {
         var elemTop = $(this).offset().top - headerHeight - 1;
      } else {
         var elemTop = $(this).offset().top - 1;
      }
      var elemBottom = $(this).offset().top + $(this).height();
      if (currentTop >= elemTop && currentTop <= elemBottom) {
         var id = $(this).attr("id");
         var navElem = $('a[href="#' + id + '"]');
         navElem
            .parent()
            .addClass("active")
            .siblings()
            .removeClass("active");
      }
   });
});

$(".hamburger").click(function() {
   $(".hamburger").toggleClass("is-active");
   if (document.querySelector(".open")) {
      $(".menu.open")
         .removeClass("open")
         .addClass("out");
   } else if (document.querySelector(".menu")) {
      $(".menu")
         .addClass("open")
         .removeClass("out");
   }
});

$(".nav-ul li a").click(function() {
   if ($(window).outerWidth() < 992) {
      $(".menu").toggleClass("open");
      $(".hamburger").toggleClass("is-active");
   }
});

$(window).resize(function() {
   if ($(window).outerWidth() >= 992) {
      $(".menu").removeClass("open");
      $(".hamburger").removeClass("is-active");
   }
});
