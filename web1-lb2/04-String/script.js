let str = "Hello ";
let name = "Welt";

let greeting = str + name; // "+" operatörü ile "Hello" ve "Welt" arasına gereksiz boşluk eklemeyin.
console.log(greeting);

name = "Student"; // name değişkeninin değeri "Student" olarak güncelleniyor.
let result = `${greeting} Yasin ${name}`; // Back-ticks kullanarak greeting ve name değişkenlerini ekliyorsunuz.
console.log(result);
