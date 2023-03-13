/* Body */
const content = document.querySelector('.content');

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
      let currentBtn = document.querySelector('.btn-active');
      currentBtn.className = currentBtn.className.replace('btn-active', '');
      this.className += ' btn-active';
    });
  }

  //Active section
  content.addEventListener('click', (event)=> {
    const id = event.target.dataset.id;
    console.log(id);
    if(id) {
      //remove selected from other buttons
      sectionControls.forEach((btn) => {
        btn.classList.remove('active');
      })
      event.target.classList.add('active');

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })
}