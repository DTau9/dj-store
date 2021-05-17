export default function handlePopUp() {
  const popUp = document.querySelector('.pop-up');

  document.addEventListener('click', (e) => {
    if (
      e.target.dataset.sliderCallback === 'callback' ||
      e.target.id === 'orderСallback'
    ) {
      popUp.classList.add('active');
      document.querySelector('body').classList.add('overflow-hidden');
    }
    if (e.target.className === 'pop-up__cross-close' || e.target.id === 'popUp') {
      popUp.classList.remove('active');
      document.querySelector('body').classList.remove('overflow-hidden');
    }
  })
}
