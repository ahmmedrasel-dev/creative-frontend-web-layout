$(function () {
  "use strict";

  $(".search_icon").on("click", function () {
    $(".search").addClass("show_search");
  });

  $(".close_search").on("click", function () {
    $(".search").removeClass("show_search");
  });

  // Sticky Menu JS
  if ($(window).scrollTop() > 1) {
    if ($(".main_menu").offset() != undefined) {
      $(".main_menu").addClass("sticky_menu");
    }
  } else {
    if ($(".main_menu").offset() != undefined) {
      $(".main_menu").removeClass("sticky_menu");
    }
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      if ($(".main_menu").offset() != undefined) {
        if (!$(".main_menu").hasClass("sticky_menu")) {
          $(".main_menu").addClass("sticky_menu");
        }
      }
    } else {
      if ($(".main_menu").offset() != undefined) {
        $(".main_menu").removeClass("sticky_menu");
      }
    }
  });

  //======Nice select js=======
  $(".language_select").niceSelect();

  const $text = $(".watch_video");
  $text.html(
    $text
      .text()
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 12.8}deg)">${char}</span>`
      )
      .join("")
  );

  // MARQUEE ANIMATION JS
  $(".marquee_animi").marquee({
    gap: 100,
    speed: 70,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    pauseOnHover: true,
  });

  const $experience = $(".experience");
  $experience.html(
    $experience
      .text()
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
      )
      .join("")
  );

  // COUNTER JS
  $(".count").countUp();

  $(".portfolio_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    focusOnSelect: false,
    speed: 300,
    dots: false,
    arrows: true,
    nextArrow: '<i class="fas fa-arrow-right nextArrow"></i>',
    prevArrow: '<i class="fas fa-arrow-left prevArrow"></i>',

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: '<i class="fas fa-arrow-right nextArrow"></i>',
    prevArrow: '<i class="fas fa-arrow-left prevArrow"></i>',
    dots: false,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  //*=====venobox js=====
  $(".venobox").venobox();

  // WOW JS
  new WOW().init();
});
