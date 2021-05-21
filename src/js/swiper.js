import Swiper from 'swiper';
import SwiperCore, { Navigation, Controller, EffectFade } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/controller/controller.scss';
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([Navigation, Controller, EffectFade]);


export default function swiper() {

  const mySlider = new Swiper(".my-slider", {
    effect: "fade",
    fadeEffect: { crossFade: true },
    loop: true,
    loopedSlides: 4,
    simulateTouch: false,
    noSwipingClass: 'my-slider__slide',
  });

  const myMiniSlider = new Swiper(".my-mini-slider", {
    slidesPerView: 'auto',
    loop: true,
    speed: 600,
    slideActiveClass: 'my-mini-slider__slide_active',
    navigation: {
      nextEl: ".swiper-btn_next",
      prevEl: ".swiper-btn_prev",
      disabledClass: "swiper-btn_disabled"
    },
    controller: {
      control: mySlider
    }
  });



}
