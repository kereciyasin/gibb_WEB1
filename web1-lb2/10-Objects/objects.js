const car = {
  brand: "Mercedes",
  model: "x5",
  year: "2023",
  isElectric: true,
  drive: function () {
    console.log("Das Auto fährt los!");
  },
};
console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.isElectric);
car.drive();
