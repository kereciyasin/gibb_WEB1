let result;

result = 10; // number
result = "10"; // string
result = Number("10"); // number
result = parseInt("10.6"); // number
result = parseFloat("10.6"); // double

result = isNaN("10"); // false
result = isNaN("10a"); // true

let num = 10.123456789;

result = num.toPrecision(5); // 10.123
result = num.toFixed(5); // 10.12345 ondalikli sayida 5 basamak

result = Math.round(2.4); // yuvarlar 2.5 ve ustu 3 olur
result = Math.ceil(2.4); // yukari yuvarlar
result = Math.floor(2.4); // asagi yuvarlar

result = Math.sqrt(64); // karekok
result = Math.pow(2, 4); // us alma
result = Math.abs(-10); // mutlak deger
result = Math.min(1, 2, 3, 4, 5); // en kucuk sayi

result = Math.random(); // 0 ile 1 arasinda random sayi
result = Math.random() * 100; // 0 ile 100 arasinda random sayi
result = Math.floor(Math.random() * 100); // 0 ile 100 arasinda random tam sayi
result = Math.floor(Math.random() * 100 + 1); // 1 ile 100 arasinda random tam sayi

console.log(typeof result); // number
console.log(result); // 10
