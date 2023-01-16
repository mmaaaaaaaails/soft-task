const links = document.querySelectorAll('.menu_link');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu_lists');
const overlay = document.querySelector('.overlay');

links.forEach((e) => {
  e.addEventListener('click', () => {
    links.forEach((event) => {
      event.classList.remove('menu_link-active')
    })
    e.classList.add('menu_link-active');
  })
})

const toggleMenu = () => {
  menu.classList.toggle('menu_lists-active');
  overlay.classList.toggle('overlay--active');
  hamburger.classList.toggle('change');
}

hamburger.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', (event) => {
    const target = event.target;
    const itsMenu = target == menu || menu.contains(target);
    const itsHamburger = target == hamburger;
    const menuIsActive = menu.classList.contains('menu_lists-active');
    if (!itsMenu && !itsHamburger && menuIsActive) {
      toggleMenu();
    }
});
