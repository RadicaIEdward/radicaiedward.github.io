function randomColor() {
  const rColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + rColor;
}

document.querySelector('#button').onclick = function () {
  const bodyBackground = document.querySelector('#thank-body');

  bodyBackground.style.backgroundColor = randomColor();
};
