let student = ["John", "Doe", "Yasin"];
result = student.length;

// array to string
result = student.toString();
result = student.join(" - ");

// remove
// result = student.pop(); // son eleman silinir ve silenen elemanı döndürür
// result = student.shift(); // ilk eleman silinir ve silinen elemanı döndürür

// add

// result = student.push("Ali"); // sona eleman ekler ve yeni array length döndürür
// result = student.unshift("Ali"); // başa eleman ekler ve yeni array length döndürür

let marka1 = ["Audi", "BMW", "Mercedes"];
let marka2 = ["Toyota", "Fiat", "Renault"];
result = marka1.concat(marka2).join(" - ");

console.log(result.toString());
// console.log(student);
