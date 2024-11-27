let ogr1 = ["Yigit", "Bilge", 2010, [70, 60, 80]];
let ogr2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
let ogr3 = ["Ahmet", "Turan", 2008, [60, 60, 70]];

let arr = [ogr1, ogr2, ogr3];

function yas(x) {
  let yasHesapla = 2024 - arr[x][2];
  return console.log(`Yas ${yasHesapla}`);
}

function ortalama(x) {
  let toplam = 0;
  for (let i = 0; i < arr[x][3].length; i++) {
    toplam = toplam + arr[x][3][i];
  }
  let ort = toplam / arr[x][3].length;
  return console.log(`Ortlama ${ort}`);
}
ortalama(0);
