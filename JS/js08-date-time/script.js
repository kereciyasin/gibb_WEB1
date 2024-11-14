let heute = new Date(); // aktuelles Datum und Uhrzeit

result = heute;
result = heute.getDate(); // gün gelir
result = heute.getDay(); // günün sırası gelir(hangi gün olduğunu verir) 0 pazardir.
// Get methods
result = heute.getFullYear(); // yıl gelir
result = heute.getHours(); // saat gelir
result = heute.getMinutes(); // dakika gelir
result = heute.getSeconds(); // saniye gelir
result = heute.getMilliseconds(); // milisaniye gelir
result = heute.getTime(); // 1970 den bu yana geçen milisaniye sayısı gelir

// Set methods
heute.setFullYear(2023); // yılı değiştirir
heute.setMonth(11); // ayı değiştirir
heute.setDate(12); // günü değiştirir

result = heute;

// Nesne oluştururken tarih ve saat belirleme

let birthday = new Date(1995, 2, 6);

result = heute.getFullYear() - birthday.getFullYear();
result = heute - birthday; // iki tarih arasındaki farkı milisaniye cinsinden verir.
let miniSecond = heute - birthday;
let saniye = miniSecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gün = saat / 24;

result = gün;

console.log(result);
console.log(typeof result);
