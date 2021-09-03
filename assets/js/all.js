"use strict";

var swiper = new Swiper(".mySwiper", {});
var customSwiper = new Swiper(".customSwiper", {
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 8,
  slidesPerColumnFill: "row",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30
    }
  }
});
var chooseSwiper = new Swiper(".chooseSwiper", {
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30
    },
    960: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 20
    }
  }
});
var teacherSwiper = new Swiper(".teacherSwiper", {
  slidesPerView: 1,
  slidesPerColumn: 4,
  spaceBetween: 72,
  slidesPerColumnFill: "row",
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 30
    }
  }
});
var courseSwiper = new Swiper(".courseSwiper", {
  slidesPerView: 1.2,
  slidesPerColumn: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerColumn: 1
    },
    1200: {
      slidesPerView: 4.2,
      slidesPerColumn: 1
    }
  }
});
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  nextArrow: ">",
  prevArrow: "<",
  buttonClass: "btn primary"
});
//# sourceMappingURL=all.js.map
