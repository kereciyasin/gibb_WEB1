// const car = {
//   brand: "BMW",
//   model: "x200",
//   year: 2001,
//   isElectric: true,

//   drive: function() {
//     console.log("Das Auto fährt los!");
//   }
 
// }
// car.drive()

function outerFunction(arg1){
  let variable1 = "Ben Kapaliyim";

  return function innerFuction(arg2){
    return `${arg1}, ${arg2}, ${variable1}`;
  }
}
const closure = outerFunction("Merhaba");
console.log(closure("Merhaba Dünya"));