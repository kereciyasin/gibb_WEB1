class Person {

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    console.log(`Hello, my name is ${this.name}`);
  }

}

const person = new Person('John');
const person2 = new Person('Jane');

const person3 = new Person('Doe', 30);
console.log(Person.prototype.sayHello); // true 
person3.sayHello(); // Hello, my name is Doe

