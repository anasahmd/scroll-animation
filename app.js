const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  for (let box of boxes) {
    const boxt = box.getBoundingClientRect().top;

    if (boxt < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  }
}
