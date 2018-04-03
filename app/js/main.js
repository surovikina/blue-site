
  $('.sl').slick({
    slidesToShow: 3
    // centerMode: true;
    //centerPadding: 10.5%;
  });


  $('.slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: false,
 asNavFor: '.slider-nav-thumbnails',
});

$('.slider-nav-thumbnails').slick({
 slidesToShow: 5,
 slidesToScroll: 1,
 asNavFor: '.slider',
 dots: true,
 focusOnSelect: true
});
