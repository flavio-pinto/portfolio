/* Body */
const content = document.querySelectorAll('.content');

/* Control Buttons Script */
const sections = document.querySelectorAll('.section');
const sectionControls = document.querySelectorAll('.controls');
const sectionControlBtns = document.querySelectorAll('.control');

sectionTransitions();

/* FUNCTIONS */
function sectionTransitions() {
  //Active button
  for(let i = 0; i < sectionControlBtns.length; i++) {
    sectionControlBtns[i].addEventListener('click', function() {
      let currentBtn = document.querySelectorAll('.btn-active');
      currentBtn[0].className = currentBtn[0].className.replace('btn-active', '');
      this.className += ' btn-active';
    });
  }
}