import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from 'scrollreveal';
gsap.registerPlugin(ScrollTrigger);

$(function () {
  // 詳細ページのカルーセル
  if ($('main').hasClass('CaseDetail')) {
    const $slider = $('.Slider');

    $slider.slick({
      centerMode: true,
      centerPadding: '80px',
      infinite: true,
      draggable: false,
      slidesToShow: 4,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerPadding: '20px',
            dots: false,
            draggable: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            centerPadding: '20px',
            dots: false,
            draggable: true
          }
        }
      ]
    });
  }

  // QAページのエキスパンド
  if ($('.js-expand').length) {
    $('.js-expand').on('click', function () {
      $(this).find('.Expand_wrapper').slideToggle();
      $(this).find('.Expand_arrow').toggleClass('is-open');
    });
  }

  // scrollで出現するアニメーション
  const slideUp = {
    distance: '105%',
    origin: 'bottom',
    opacity: 0,
    duration: 600,
    delay: 400
  };

  // グローバルナビのhover
  if ($('.js-NaviItem')) {
    $('.js-NaviItem').hover(function () {
      $(this).find('.Navi_innerList').addClass('is-show');
    });
    $('.js-NaviItem').mouseleave(function () {
      $(this).find('.Navi_innerList').removeClass('is-show');
    });
  }

  // loadingのアニメーションが終わったら本体表示
  const openThePage = () => {
    setTimeout(() => {
      $('.Loader').addClass('open');
      $('main').css('opacity', '1');
    }, 2000);
    setTimeout(() => {
      $('.logoImg').addClass('is-show');
    }, 3500);
  };

  // loadingの画像
  gsap.fromTo(
    '.js_logo_image',
    {
      y: 50,
      opacity: 0
    },
    {
      ease: 'power4',
      y: 0,
      delay: 0.6,
      duration: 3,
      opacity: 1,
      onComplete: openThePage()
    }
  );

  // $()
  $('.js-Navi_menu').on('click', function () {
    $('.js-FullMenu').addClass('is-show');
  });

  $('.js-FullMenu_close').on('click', function () {
    $('.js-FullMenu').removeClass('is-show');
  });

  ScrollReveal().reveal('.slideUp', slideUp);
});
