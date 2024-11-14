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


console.log(typeof result); // number
console.log(result); // 10
