let header = document.querySelector('.header');
let upButton = document.querySelector('.up-button');

(function () {
  window.onscroll = () => {
    if (window.pageYOffset > 68) {
      header.classList.add('header_active');
      upButton.classList.add('up-button_shown');
    } else {
      header.classList.remove('header_active');
      upButton.classList.remove('up-button_shown');
    }
  }
}());

upButton.onclick = function () {
  window.scrollTo(0, 0)
}

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let headerMenuItems = document.querySelector('.header__menu-items');
let headerMenuItem = document.querySelectorAll('.header__menu-item');
let lineTop = document.querySelector('.line-top');
let lineMiddle = document.querySelector('.line-middle');
let lineBottom = document.querySelector('.line-bottom');

headerBurger.onclick = function () {
  headerMenu.classList.toggle('header__menu');
  headerMenu.classList.toggle('header__menu_active');
  lineTop.classList.toggle('line-top_active');
  lineMiddle.classList.toggle('line-middle_active');
  lineBottom.classList.toggle('line-bottom_active');
  headerMenuItems.classList.toggle('header__menu-items');
  headerMenuItems.classList.toggle('header__menu-items_active');
  // for (let eachItem of headerMenuItem) {
  //   eachItem.classList.toggle('header__menu-item');
  //   eachItem.classList.toggle('header__menu-item_active');
  // }
  
}



// let upButton = document.querySelector('.up-button');

// window.onscroll = function () {
//   if (window.pageYOffset > 200) {
//     upButton.classList.add('up-button_shown');
//   } else {
//     upButton.classList.remove('up-button_shown');
//   }
// }
