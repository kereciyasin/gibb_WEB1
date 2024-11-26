// for (i = 1; i < 11; i++) {
//   if (i % 2 == 0) {
//   } else {
//     console.log(i);
//   }
// }


let i = 0;        // i'yi let olarak tanımlıyoruz
let toplam = 0;    // toplam değişkenini sıfırla başlatıyoruz

while (i <= 100) {
  toplam = toplam + i;  // her döngüde toplamı i ile topluyoruz
  i++;                   // i'yi 1 artırıyoruz
     // her adımda toplamı ekrana yazdırıyoruz
}
console.log(toplam); 
