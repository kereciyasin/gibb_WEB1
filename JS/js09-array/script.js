let marke = ["BMW", "Audi", "VW", "Mercedes", "Opel"];
let price = [50000, 45000, 40000, 55000, 30000];
let color = ["black", "white", "blue", "red", "green"];
let year = [2018, 2019, 2020, 2021, 2022];

console.log(marke);
console.log(price[2]); // 40000
console.log(color[3]); // red

console.log(`${marke[0]}-${color[0]}-${price[0]}-${year[0]}`);

// Array length
console.log(marke.length); // 5
console.log(price.length); // 5
console.log(color.length); // 5
console.log(year.length); // 5


// Array methods
// push() - add element to the end of the array
marke.push("Fiat");


// pop() - remove element from the end of the array

marke.pop();


// unshift() - add element to the beginning of the array

marke.unshift("Fiat");


// shift() - remove element from the beginning of the array

marke.shift();



