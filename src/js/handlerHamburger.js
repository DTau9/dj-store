export default function handlerHamburger() {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'hamburger') {
      document.getElementById('hamburger').classList.toggle('active');
      document.getElementById('navContainer').classList.toggle('active');
      document.querySelector('body').classList.toggle('overflow-hidden');
    }
  })
}

