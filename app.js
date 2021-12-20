const falseButton = document.querySelector('.false');
const trueAnswer = () => {
  alert('TEBRİKLER !!1!!!!!111!1');
};

falseButton.addEventListener('mouseenter', () => {
  if (falseButton.style.top == '1px') {
    falseButton.style.top = null;
    falseButton.style.bottom = '1px';
  } else {
    falseButton.style.bottom = null;
    falseButton.style.top = '1px';
  }
});
