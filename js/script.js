'use strict';
const subMenuBtn = document.querySelectorAll('.js-subMenu-btn');
const menuBtn = document.querySelector('.js-menu-btn');

subMenuBtn.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const parent = e.target.closest('.nav__list--item');

    if (parent.classList.contains('nav__list--items-active')) {
      parent.classList.toggle('nav__list--items-active');
      return;
    }

    document
      .querySelectorAll('.js-list-item')
      .forEach((list) => list.classList.remove('nav__list--items-active'));

    parent.classList.toggle('nav__list--items-active');
  });
});

menuBtn.addEventListener('click', function (e) {
  const menuContainer = document.querySelector('.js-menu-container');
  menuContainer.classList.toggle('nav__menu--container-active');

  document
    .querySelector('.js-menu-open')
    .classList.toggle('nav--menu-icon-deactivate');
  document
    .querySelector('.js-menu-close')
    .classList.toggle('nav--menu-icon-active');
});
