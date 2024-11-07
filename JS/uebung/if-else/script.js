let num;

//1. Aufgabe
// num = 5;

// if (num > 10 && num < 50) {
//   console.log("Die Zahl ist zwischen 10 und 50: ");
// } else {
//   console.log("Die Zahl ist zwischen nicht 10 und 50");
// }

//--------------------------------------------------------------------------------

//2. Aufgabe
// num = -11;

// if (num > 0 && num % 2 == 1) {
//   console.log("Die Zahl ist positiv und ungerade: ");
// } else {
//   console.log("Die Zahl ist nicht positiv und ungerade");
// }

//--------------------------------------------------------------------------------

//3. Aufgabe

// let x, y, z;
// x = 5;
// y = 10;
// z = 15;

// if (x > y && x > z) {
//   console.log("x ist die größte Zahl");
// } else if (y > x && y > z) {
//   console.log("y ist die größte Zahl");
// } else {
//   console.log("z ist die größte Zahl");
// }

//--------------------------------------------------------------------------------

//4. Aufgabe

let note1 = 4.1;
let note2 = 4.7;
let final = 3.9;

result = ((note1 + note2) / 2) * 0.4 + final * 0.6;

if ((result >= 4.0 && final >= 4.0) || final >= 4.75) {
  console.log("Du hast bestanden: " + result);
} else {
  console.log("Du hast nicht bestanden: " + result);
}
