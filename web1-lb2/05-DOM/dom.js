// h1 başlığının metnini değiştiren fonksiyon
function changeTitle() {
  const h1 = document.querySelector('h1'); // h1 etiketi seçilir
  h1.textContent = 'Yeni Başlık'; // Başlık metni 'Yeni Başlık' olarak değiştirilir
}

// Butonun metnini değiştiren fonksiyon
function changeButton() {
  const button = document.querySelector('button'); // Button etiketi seçilir
  button.textContent = 'Tıklandı!'; // Buton metni 'Tıklandı!' olarak değiştirilir
}

// Butona tıklama olay dinleyicisi eklenir
const button = document.querySelector('button');
button.addEventListener('click', function() {
  changeTitle();  // changeTitle fonksiyonu çağrılır
  changeButton(); // changeButton fonksiyonu çağrılır
});
