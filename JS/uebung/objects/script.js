let bestellung_1 = {
  bestellung_id: 1,
  bestellung_datem: "2021-01-01",
  zahlungsart: "Kredi Karte",
  lieferungadresse: {
    strasse: "Musterstrasse",
    plz: "12345",
    ort: "Musterort",
  },
  artikel: [
    {
      artikel_id: 5,
      artikel_name: "Iphone 13 pro",
      artikel_url: "https://www.apple.com/de/shop/buy-iphone/iphone-13-pro",
      artikel_preis: 999.99,
    },
    {
      artikel_id: 6,
      artikel_name: "Iphone 13 pro max",
      artikel_url: "https://www.apple.com/de/shop/buy-iphone/iphone-13-pro.max",
      artikel_preis: 1500.25,
    },
  ],
};
let bestellung_2 = {
  bestellung_id: 102,
  bestellung_datem: "2021-01-01",
  zahlungsart: "Kredi Karte",
  lieferungadresse: {
    strasse: "Musterstrasse",
    plz: "12345",
    ort: "Musterort",
  },
  artikel: [
    {
      artikel_id: 5,
      artikel_name: "Iphone 13 pro",
      artikel_url: "https://www.apple.com/de/shop/buy-iphone/iphone-13-pro",
      artikel_preis: 1999.99,
    },
  ],
};

let bestellung_1summen =
  bestellung_1.artikel[0].artikel_preis +
  bestellung_1.artikel[1].artikel_preis * 1.18;

let bestellung_2summen = bestellung_2.artikel[0].artikel_preis * 1.18;

let summengesamt = bestellung_1summen + bestellung_2summen;
console.log("Summe Bestellung 1: " + bestellung_1summen);
console.log("Summe Bestellung 2: " + bestellung_2summen);
console.log("Summe gesamt: " + summengesamt);

let bestellungen = [bestellung_1, bestellung_2];
