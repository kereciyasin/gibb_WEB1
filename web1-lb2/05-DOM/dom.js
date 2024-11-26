// changeTitle fonksiyonu, başlık (h1) metnini değiştirecek
function changeTitle() {
  const title = document.getElementById("h1");
  title.textContent = "Yeni Title"; // Başlık metnini değiştiriyoruz
}

// changeButton fonksiyonu, buton metnini değiştirecek
function changeButton() {
  const button = document.getElementById("buttonId");
  button.textContent = "Gelickt!"; // Buton metnini değiştiriyoruz
  changeTitle();
}
