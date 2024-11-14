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

result = heute;

console.log(result);
console.log(typeof result);
