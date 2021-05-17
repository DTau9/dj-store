import handlerHamburger from './js/handlerHamburger';
import handlePopUp from './js/handlerPopUp';
import handlerScroll from './js/handlerScroll';
import handlerTooltip from './js/handlerTooltip';
import submitForm from './js/submitForm';

import './scss/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  handlerHamburger()
  handlePopUp()
  handlerScroll()
  handlerTooltip()
  submitForm()
})
