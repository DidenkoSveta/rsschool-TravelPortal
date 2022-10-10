
  let menuOpenButton = document.querySelector('.burger');
  let menu = document.querySelector('.navigation__header');
  let menuCloseButton = document.querySelector('.close');

  menuOpenButton.addEventListener('click', () => {
    menu.classList.add('show');
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')
        || !e.target.classList.contains('navigation__header')
        && !e.target.classList.contains('burger')) {
      menu.classList.remove('show');
    }
  });
