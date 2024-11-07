// let result;
// let a = 10,
//   b = 5,
//   c = 30;

// // Addition
// result = a + b;
// console.log(result); // 15

// // Subtraction
// result = a - b;
// console.log(result); // 5

// // Multiplication
// result = a * b;
// console.log(result); // 50

// // Division
// result = a / b;
// console.log(result); // 2

// // Modulus
// result = a % b;
// console.log(result); // 0

// // Exponentiation
// result = a ** b;
// console.log(result); // 100000

// // Increment
// result = a++;
// console.log(result); // 10

// if else

// let isLoggedin = true;

// if (isLoggedin) {
//   console.log("User is logged in");
// } else {
//   console.log("User is not logged in");
// }

let username = "admin";
let password = "admin1234";
// let isLoggedin = username === "admin" && password === "admin1234";
// if (isLoggedin) {
//   console.log("User is logged in");
// } else {
//   console.log("User is not logged in");
// }

if (username === "admin") {
  if (password === "admin1234") {
    console.log("User is logged in");
  } else {
    console.log("Password is incorrect");
  }
} else {
  console.log("Username is incorrect");
}
