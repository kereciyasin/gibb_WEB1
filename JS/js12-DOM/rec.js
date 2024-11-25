const CLASS_NAME = 'Rectangle'

let sayi = 10.10;
let sayi1 = 10

let sayi2 = new Number()
 
console.log(typeof sayi);
console.log(typeof sayi1);
console.log(sayi2);

class Rectangle {

  constructor(width, height) {
      this.width = width;
      this.height = height;
  }
  
  getArea(){
    return this.width * this.height;
  }
}


const rect = new Rectangle(5, 10);
console.log(rect.getArea());  // Erwartete Ausgabe: 50

const users = [
  { id: 1, name: "Anna", age: 28 },
  { id: 2, name: "Ben", age: 34 },
  { id: 3, name: "Cara", age: 25 }
];

function findUserById(id) {
  for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
          return users[i];
      }
  }
  return null;
}

console.log(findUserById(0));  // Erwartete Ausgabe: { id: 2, name: "Ben", age: 34 }

let str = "10"
let str1 = "4"
let sum = str / str1
console.log(sum);