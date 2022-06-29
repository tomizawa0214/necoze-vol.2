$(function () {
  $(".slider").slick({
    autoplay: true,
    arrows: false,
    fade: true,
    asNavFor: ".thumbnail",
    autoplaySpeed: 15000,
    dots: true,
    arrows: false,
    dotsClass: 'slider-dots',
  })
  $(".thumbnail").slick({
    slidesToShow: 6,
    asNavFor: ".slider",
    focusOnSelect: true,
  })
})