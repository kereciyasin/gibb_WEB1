// function counter() {
//   let count = 0;

//   // İç fonksiyon, count değişkenini hatırlayarak her çağrıldığında değeri arttıracak
//   return function() {
//     count++;
//     return count;
//   };
// }

// const myCounter = counter();

// console.log(myCounter()); // 1 döndürecek
// console.log(myCounter()); // 2 döndürecek
// console.log(myCounter()); // 3 döndürecek

// for (let i = 0; i < 5; i++) {
//   const x = i * 2;  // Her döngü turunda farklı bir kapsam
//   console.log(x);
// }
// console.log(x);  // ReferenceError: x sadece döngü bloğu içinde tanımlı.

class Araba {
  constructor(model) {
    this.model = model;
  }

  sur() {
    console.log(`${this.model} sürülüyor`);
  }
}

let araba = new Araba("Mercedes");
araba.sur();
