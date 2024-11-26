function getRandomHexColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function changeBackgroundColor() {
  const element = document.getElementById("myParagraph");
  element.style.backgroundColor = getRandomHexColor();
}
function resetBackgroundColor() {
  const pElement = document.getElementById("myParagraph");
  pElement.style.backgroundColor = ""; // Arka plan rengini sıfırla
}
