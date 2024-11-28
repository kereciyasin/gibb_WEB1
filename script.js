function changeTitle() {
  let baslik = document.getElementById("changeTitle");
  baslik.textContent = "Beni degistirdin";
}
function changeButton() {
  let btn = document.getElementById("buttonClick");
  btn.textContent = "Tikladin!!!";
}

const btn1 = document.getElementById("buttonClick");
btn1.addEventListener("click", function () {
  changeTitle();
});
