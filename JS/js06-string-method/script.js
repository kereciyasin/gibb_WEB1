let kursName = "JavaScript kursu: Modern JavaScript Kursu";

let result;

// toLowerCase() methodu
result = kursName.toLowerCase();

// toUpperCase() methodu
result = kursName.toUpperCase();

// substring() methodu
result = kursName.substring(0, 10);

// length property
result = kursName.length;

// replace() methodu
result = kursName.replace("JavaScript", "Python");

// trim methodu bosluklari sil
result = kursName.trim();
result = kursName.trimEnd();
result = kursName.trimStart();

// split() methodu stringi arraya cevirir
result = kursName.split(" ");
result = kursName.split(" ")[0];
result = kursName.split(" ")[3];

console.log(result);
