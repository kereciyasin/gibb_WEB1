let url = "https://www.gibb.ch/ausbildung/technik/informatik";
let kursName = "JavaScript kursu: Modern JavaScript Kursu";
let result;

// 1- url kac karakterlidir?
result = url.length;
console.log(result);

// 2- kursName kelime sayisi kac karakterlidir?
result = kursName.split(" ").length;
console.log(result);

// 3- url https ile mi basliyor?
result = url.startsWith("https");
console.log(result);

// 4- kursName icinde gecen "Egitim" kelimesi var mi?
result = kursName.indexOf("Egitim");
console.log(result);

// 5- url ve kursName degiskenlerini kullanarak asagidaki string bilgiyi olusturun
//    "https://www.gibb.ch/egitim/teknik/modern-javaScript-kursu"

result = kursName.toLowerCase();
result = result.replaceAll(" ", "-");

result = `${url}/${result}`;
console.log(result);
