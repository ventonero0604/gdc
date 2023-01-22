import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

$(function () {
  if ($('main').hasClass('CaseDetail')) {
    const $slider = $('.Slider');

    $slider.slick({
      centerMode: true, // 両サイドに前後のスライド表示
      centerPadding: '80px',
      infinite: true,
      draggable: false,
      slidesToShow: 4, // 一度に表示するスライド数
      arrows: true,
      dots: true
    });
  }
});
