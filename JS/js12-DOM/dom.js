function changeTitle() {
  document.querySelector('h1').textContent = "Neuer Titel";
}

function changeButton() {
  document.querySelector('button').textContent = "Geklickt!";
}

document.querySelector('button').addEventListener('click', changeTitle);
document.querySelector('button').addEventListener('click', changeButton);
