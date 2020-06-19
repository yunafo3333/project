const opener = document.getElementById('opener');
const popup = document.getElementById('popup');

const transitionEnded = function () {
  const isOpen = popup.classList.contains('is-open');
  
  popup.setAttribute('aria-expanded', isOpen);
  
  popup.removeEventListener('transitionend', transitionEnded);
};

const clickOutsideToClose = function (event) {
  const path = event.path || (event.composedPath && event.composedPath());
  
  if (! path) {
    return;
  }
  
  const isOutsidePopup = path.filter(el => {
    return el === popup || el === opener;
  }).length === 0;
  
  if (! isOutsidePopup) {
    return;
  }
  
  popup.classList.remove('is-open');
  opener.classList.remove('is-active');

  document.body.removeEventListener('click', clickOutsideToClose);
};

opener.addEventListener('click', e => {
  const willOpen = popup.classList.toggle('is-open');
  
  if (willOpen) {
    opener.classList.add('is-active');
    document.body.addEventListener('click', clickOutsideToClose);
  } else {
    opener.classList.remove('is-active');
    document.body.removeEventListener('click', clickOutsideToClose);
  }
  
  popup.addEventListener('transitionend', transitionEnded);
});
