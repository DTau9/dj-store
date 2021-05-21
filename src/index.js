import handlerHamburger from './js/handlerHamburger';
import handlePopUp from './js/handlerPopUp';
import handlerScroll from './js/handlerScroll';
import handlerTooltip from './js/handlerTooltip';
import submitForm from './js/submitForm';
import swiper from './js/swiper';
import formValidation from './js/formValidation';

import './scss/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  swiper();
  handlerHamburger();
  handlePopUp();
  handlerScroll();
  handlerTooltip();
  formValidation();
  submitForm();
})
