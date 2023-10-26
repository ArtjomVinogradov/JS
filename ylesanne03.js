
/*************Sõidu aeg ja kaugus*********** */

const kilometers = 120;
const kiirus = 100;

const aeg = kilometers / kiirus;

console.log ("See võtab " + aeg + " tund");




/************Postituste kuvamine************ */


const messages = 137;
const uhellehel = 10;

const lehed = messages / uhellehel;

console.log("Sul on vaja: " + lehed + " lehed");




/**************Serveri töökulu************ */


const joudu = 400;
const enegery = 0.0969; // Elektri hind eurodes kilovatt-tunni kohta (eurod/kWh)

const cost = joudu / 1000;

const tookulu = cost * enegery;

console.log("Serveri töökulu ühe tunni jooksul on: " + tookulu + " eurot");

