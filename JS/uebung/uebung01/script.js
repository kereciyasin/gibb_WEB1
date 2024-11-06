var student1Name = "Adam";
var student1Surname = "Smith";
var studentYear = "2012";
var matNote1 = 70;
var matNote2 = 70;
var matNote3 = 80;

var durchschnitt1 = (matNote1 + matNote2 + matNote3) / 3;
console.log(durchschnitt1);
console.log(durchschnitt1 >= 50);
console.log(typeof durchschnitt1);

var student2Name = "John";
var student2Surname = "Doe";
var student2Year = "2013";
var mat1Note1 = 40;
var mat1Note2 = 40;
var mat1Note3 = 50;

var durchschnitt2 = (mat1Note1 + mat1Note2 + mat1Note3) / 3;
console.log(durchschnitt2);
console.log(typeof durchschnitt2);
console.log(durchschnitt2 >= 50);

var nowYear = new Date().getFullYear();

var student1_Year = nowYear - parseInt(studentYear);
console.log(student1_Year);
var student2_Year = nowYear - parseInt(student2Year);
console.log(student2_Year);
