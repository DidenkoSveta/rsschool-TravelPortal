
  const popUpWindow = document.querySelector('.popUp');
  const loginButton = document.querySelector('.btn__login');
  const loginLink = document.querySelector('.link-login');
  const popUpLoginButton = popUpWindow.querySelector('.popUp__button_login');
  let loginSite;
  let changeLink;


  loginButton.addEventListener('click', showpopUp);
  loginLink.addEventListener('click', showpopUp);
  popUpWindow.addEventListener('click', isClickOutOfpopUp);
  popUpLoginButton.addEventListener('click', showInputData);
  findChangeButton();

  function showpopUp() {
    popUpWindow.classList.add('show');
    window.addEventListener('keydown', isKeyEsc);
  }

  function isClickOutOfpopUp(e) {
    if (e.target.classList.contains('popUp')) closepopUp();
  }

  function isKeyEsc(e) {
    if (e.keyCode === 27) closepopUp();
  }

  function closepopUp(e) {
    popUpWindow.classList.remove('show');
  }

  function showInputData() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    alert('Is the data entered correctly?\n\nE-mail: ' + email + '\nPassword: ' + password);
  }
    const registerHTML = `
      <div class="popUp__wrapper">
        <h3 class="popUp__title">Create account</h3>
        <form autocomplete="off" class="popUp__form">
          <label for="email" class="popUp__label">E-mail</label>
          <input type="email" id="email" class="popUp__input">
          <label for="password" class="popUp__label">Password</label>
          <input type="password" id="password" class="popUp__input">
          <button type="button" class="button button_wide popUp__button_login">Sign Up</button>
        </form>
        <p class="popUp__change-text">Already have an account? <a class="popUp_change-link">Log in</a></p>
      </div>
`;

  function findChangeButton() {
    changeLink = popUpWindow.querySelector('.popUp_change-link');
    changeLink.addEventListener('click', toggleLoginRegister);
  }

  function toggleLoginRegister() {
    if (popUpWindow.classList.contains('popUp_register')) {
      popUpWindow.innerHTML = loginSite;
      popUpWindow.classList.remove('popUp_register');
    } else {
      loginSite = popUpWindow.innerHTML;
      popUpWindow.innerHTML = registerHTML;
      popUpWindow.classList.add('popUp_register');
    }
    findChangeButton();
  }
