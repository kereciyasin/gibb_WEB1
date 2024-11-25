// Funktion zum Ändern des Titels
function changeTitle() {
  const title = document.querySelector('h1'); // Titel-Element auswählen
  title.textContent = 'Neuer Titel'; // Titel ändern
}

// Funktion zum Ändern des Button-Textes
function changeButton() {
  const button = document.querySelector('button'); // Button-Element auswählen
  button.textContent = 'Geklickt!'; // Text des Buttons ändern
}

// Ereignislistener für den Button
const button = document.querySelector('button');
button.addEventListener('click', function() {
  changeTitle(); // Titel ändern
  changeButton(); // Button-Text ändern
});
