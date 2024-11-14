// let meyve = ["elma", "armut", "muz", "kivi", "çilek"];

// // kac eleman var
// result = meyve.length;

// // ilk eleman
// result = meyve[0];

// // son eleman
// result = meyve[meyve.length - 1];

// // elma dizinin bir elemanı mı
// result = meyve.indexOf("elma");
// result = meyve.includes("elma");

// // kirazi listenin sonuna ekle
// meyve.push("kiraz");

// // dizinin son elemanını sil
// meyve.pop();
// meyve.pop();

// console.log(meyve);
// console.log(result);

let student1 = ["Yigit", "Bilgi", 2010, [70, 60, 80]];
let student2 = ["Sena", "Turan", 1999, [80, 80, 90]];
let student3 = ["Ahmet", "Turan", 1998, [60, 60, 70]];

let students = [student1, student2, student3];

let yigitYear = new Date().getFullYear() - students[0][2];
let adaYear = new Date().getFullYear() - students[1][2];
let ahnmetYear = new Date().getFullYear() - students[2][2];

let yigitNote = (students[0][3][0] + students[0][3][1] + students[0][3][2]) / 3;
let adaNote = (students[1][3][0] + students[1][3][1] + students[1][3][2]) / 3;
let ahmetNote = (students[2][3][0] + students[2][3][1] + students[2][3][2]) / 3;
console.log(yigitYear, adaYear, ahnmetYear);
console.log(yigitNote.toFixed(2), adaNote.toFixed(2), ahmetNote.toFixed(2));
