// Burger handler
export function handleBurgerMenu() {
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.header-nav');
   const menuCloseItem = document.querySelector('.nav__close');

   const footerMenu = document.querySelectorAll('.footer__menu')

   footerMenu.forEach((item) => {
      item.addEventListener('click', () => {
         const footerLinks = item.querySelectorAll('.footer__menu-link')
         const footerTriangle = item.querySelectorAll('.footer__menu-title')

         footerLinks.forEach((link) => {
            link.classList.toggle('footer__menu-link--active')
         })
         footerTriangle.forEach((triangle) => {
            triangle.classList.toggle('footer__menu-title--open')
         })
      })
   })
   burgerItem.addEventListener("click", () => {
      menu.classList.add('header-nav--active')
   });
   menuCloseItem.addEventListener("click", () => {
      menu.classList.remove('header-nav--active')
   });

};
