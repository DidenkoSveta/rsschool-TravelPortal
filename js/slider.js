  const slider = document.querySelector('.slider');
  const sliderDestinations = slider.querySelector('.destinations__slider');
  const slideGauge = slider.querySelectorAll('.button__slider');
  const leftButton = slider.querySelector('.slide__left');
  const rightButton = slider.querySelector('.slide__right');
 
  let slides;
  let slideFirst;
  let slideLast;
  let slidesRolling;

  let isEnabled = true;
  let slideActive = 1;


  function changeSlideActive(n) {
    slideActive = (n + slides.length) % slides.length;

    slideGauge.forEach(button => button.classList.remove('active'));
    slideGauge[slideActive].classList.add('active');
  }

  function setPartSlides() {
    slides = slider.querySelectorAll('.slide');
    slideFirst = slides[0];
    slideLast = slides[slides.length - 1];
  }

  function cloneSlides() {
    slideFirst.before(slideLast.cloneNode(true));
    slideLast.after(slideFirst.cloneNode(true));
  }

  function deleteClones(k1, k2) {
    slidesRolling[k1].remove();
    slidesRolling[k2].remove();
  }

  function setClassesToSlides(k1, k2, k3) {
    slidesRolling[k1].classList.add('part');
    slidesRolling[k2].classList.add('active');
    slidesRolling[k3].classList.add('part');
  }

  function animateSlides(direction) {
    isEnabled = false;

    setPartSlides();
    cloneSlides();
    sliderDestinations.classList.add('animate');
    slidesRolling = sliderDestinations.querySelectorAll('.slide');
    slidesRolling.forEach(slide => slide.classList.add(direction));
  }

  function removeClasses(direction) {
    slidesRolling.forEach(slide => slide.classList.remove(direction, 'active', 'part'));
  }

  function endAnimation() {
    sliderDestinations.classList.remove('animate');
    changeSlideActive(slideActive + 1);

    isEnabled = true;
  }

  rightButton.addEventListener('click', () => {
    if (isEnabled) {
      animateSlides('to-left');

      slidesRolling[0].addEventListener('animationend', () => {
        removeClasses('to-left');
        deleteClones(0, 1); 
        setClassesToSlides(2, 3, 4); 
        endAnimation();
      });
    }
  });

  leftButton.addEventListener('click', () => {
    if (isEnabled) {
      animateSlides('to-right');

      slidesRolling[slidesRolling.length - 1].addEventListener('animationend', () => {
        removeClasses('to-right');
        deleteClones(3, 4); 
        setClassesToSlides(0, 1, 2); 
        endAnimation();
      });
    }
  });
