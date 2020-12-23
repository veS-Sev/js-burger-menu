
  let menuBtn = document.querySelector('.header__navigation-btn'),
    menuMenu = document.querySelector('.header__navigation'),
    header = document.querySelector('.header');

  menuBtn.addEventListener('click', function () {
    if (menuMenu.classList.contains('active')) {
      menuMenu.classList.remove('active');
      header.classList.remove('fill');
    } else {
      menuMenu.classList.add('active');
      header.classList.add('fill');
    }

    let mediaNav = document.querySelector('.header__navigation-list'),
      newNavItems = document.querySelectorAll('.header__navigation-item'),
      btnLogin = document.querySelector('.header__btn-login');

    if (newNavItems.length <= 5) {
      let newNavItem = document.createElement('li');
      newNavItem.classList.add('header__navigation-item');
      mediaNav.appendChild(newNavItem);
    } else {}

    let newLogin = document.querySelectorAll('.header__navigation-item')[5];
    newLogin.appendChild(btnLogin);

    btnLogin.style.display = "block";


  });
