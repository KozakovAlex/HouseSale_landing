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



// let upButton = document.querySelector('.up-button');

// window.onscroll = function () {
//   if (window.pageYOffset > 200) {
//     upButton.classList.add('up-button_shown');
//   } else {
//     upButton.classList.remove('up-button_shown');
//   }
// }
