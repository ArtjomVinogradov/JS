/***********Temp************* */

const temperatuur = parseFloat(prompt("Sisestage temperatuur kraadides Celsiuse järgi: "));

if (temperatuur > 25) {
    console.log("Väga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
    console.log("Mõnus temperatuur");
} else {
    console.log("Jahe ilm");
}


/***********Kasutaja tunnus************** */

const kasutajanimi = prompt("Sisestage kasutajanimi: ");

if (kasutajanimi === "admin") {
    console.log("Tere, administraator!");
} else {
    console.log("Tere, külaline!");
}



/**********Bilet********* */

const pilet = prompt("Sisestage oma pilet: ");

if (pilet.toLowerCase() === "täispilet") {
    console.log("Sul on täispilet");
} 
else if (pilet.toLowerCase() === "sooduspilet") {
    const vanus1 = parseFloat(prompt("Sisestage vanus: "));

if (vanus1 > 18) {
    console.log("pilett maksab sulle 8 euro");
} 
else if (vanus1 > 64) {
    console.log("pilet maksab sulle 8 euro");
}
else if (vanus1 < 18 && vanus1 < 64) {
    console.log("pilet maksab sulle 15 euro");
  }

}



const vanus = parseFloat(prompt("Sisestage vanus: "));

if (vanus > 18) {
    console.log("pilett maksab sulle 10 euro");
} 
else if (vanus < 18) {
    console.log("pilet maksab sulle 20 euro");
}
else if (vanus < 65) {
    console.log("pilet maksab sulle 15 euro");
}
