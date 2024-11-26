let students = [
  {
    name: "Yasin",
    age: 24,
    major: "PC",
  },
  {
    name: "Nesrin",
    age: 23,
    major: "PC",
  },
  {
    name: "Nuri",
    age: 30,
    major: "Teacher",
  },
  {
    name: "Hatice",
    age: 32,
    major: "Teacher",
  },
];

const pcStudents = students
  .filter((students) => students.major === "PC")
  .map((students) => students.name);
console.log(pcStudents);
const ageStudents = students.filter((students) => students.age < 30);
console.log(ageStudents);
