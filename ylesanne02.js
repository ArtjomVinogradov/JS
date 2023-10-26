// Artjom 16.10.2023 

// Create a Date object
var currentDate = new Date();

// Get the current date
var day = currentDate.getDate();

// Get the current time
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Display the current date and time
console.log(`Current date: ${day}`);
console.log(`Current time: ${hours}:${minutes}:${seconds}`);



//***************************************** */



//TSITAAT
var tsitaat = "Parem kõht õllest kui kops töölt. Kõhu ei ole õlle jaoks, kõht on õlle jaoks."

console.log(`Tänane tsitaat on selline: ${tsitaat} "author on: rublevka õlle Hulk"` )


/************************************* */

//Mallide kasutamine
var name = "Artjom"
var lastname = "Vinogradov"

console.log(`Minu nimi on: ${name} ja perekonnanimi on ${lastname}!.`)


/********************** */


var fullname = "Dertan, Tailer"

var komaasukoht = fullname.indexOf(',');

var perekonnanimi = fullname.substring(0, komaasukoht);

var suurpere = perekonnanimi.toUpperCase();

console.log("perekonnanimi suuretähega: ", suurpere);
console.log("Perekonnanimi pikkus: ", perekonnanimi.length)


/********************* */

function muudaEmail(email) {
    // Kontrollime, kas e-posti aadressil on "netlog" domeeni
    if (email.includes("netlog")) {
      // Asendame "netlog" domeeni "gmail" domeeniga
      const uusEmail = email.replace("netlog", "gmail");
      return uusEmail;
    } else {
      // Kui "netlog" domeeni ei leita, tagastame algse e-posti aadressi
      return email;
    }
  }
  
  // Testime funktsiooni
  const algneEmail = "kasutaja@netlog.com";
  const muudetudEmail = muudaEmail(algneEmail);
  console.log(muudetudEmail);
  




/********************* */


const andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
const andmed = andmerida.split(',');

// Eraldame IP-aadressi ja kasutajanime
const ipAadress = andmed[5];
const email = andmed[3];

// Eraldame kasutajanime e-posti aadressist
const kasutajanimi = email.split('@')[0];

// Kuva tulemus
console.log("IP-aadress: " + ipAadress);
console.log("Kasutajanimi: " + kasutajanimi);
