export default function handlerScroll() {
  const header = document.querySelector('.header-container');
  let lastScrollTop = 0;

  document.addEventListener("mousewheel", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // console.log('down');
      header.classList.remove('sticky')
    } else {
      header.classList.add('sticky')
      // console.log('up');
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, false);
}
