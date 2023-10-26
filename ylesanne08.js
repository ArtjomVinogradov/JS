const mudid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

// Loome uue massiivi sorteeritud mündid
const sorteeritudMudid = [];

// Algse massiivi pikkus
const algnePikkus = mudid.length;

// Muutujad saadud müntide arvu ja summa jaoks
let saadudMudid = 0;
let mudiSumma = 0;

// Kasutame while-tsüklit sorteerimiseks ja lisamiseks
while (saadudMudid < algnePikkus) {
  let väikseimMudiVäärtus = Infinity;
  let väikseimMudiIndeks = -1;

  for (let i = 0; i < mudid.length; i++) {
    if (mudid[i] < väikseimMudiVäärtus) {
      väikseimMudiVäärtus = mudid[i];
      väikseimMudiIndeks = i;
    }
  }

  // Lisa väikseim mudi uude massiivi
  sorteeritudMudid.push(väikseimMudiVäärtus);

  // Suurenda saadud müntide arvu ja summat
  saadudMudid++;
  mudiSumma += väikseimMudiVäärtus;

  // Eemalda väikseim mudi algsest massiivist
  mudid.splice(väikseimMudiIndeks, 1);
}

console.log("Sorteeritud mündid:", sorteeritudMudid);
console.log("Saadud müntide arv:", saadudMudid);
console.log("Mudi summa:", mudiSumma);
