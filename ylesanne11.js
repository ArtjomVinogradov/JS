/************Nimed*********** */

const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", 
"Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

// Funktsioon nimede korrastamiseks
function korrastaNimed(nimed) {
  return nimed.map(function(nimi) {
    const jagatudNimi = nimi.split(" ");
    const eesnimi = jagatudNimi[0];
    const perenimi = jagatudNimi[1].toLowerCase();
    const uusNimi = eesnimi.charAt(0).toUpperCase() + eesnimi.slice(1) + " " + perenimi;
    return uusNimi;
  });
}

// Kuvame korrastatud nimed
const korrastatudNimed = korrastaNimed(nimed);
console.log("Korrastatud nimed:");
console.log(korrastatudNimed);

/**********@metshin.com*********** */

function email(nimed) {
    return nimed.map(function(nimi) {
      const [eesnimi, perenimi] = nimi.split(" ");
      const korrastatudNimi = eesnimi.charAt(0).toUpperCase() + eesnimi.slice(1) + " " + perenimi.toLowerCase();
      const email = perenimi.toLowerCase() + "@metshein.com";
      return { nimi: korrastatudNimi, email: email };
    });
  }

  const korrastatudNimi = email(nimed);
  console.log("Neile email aadress; ");
  console.log(korrastatudNimi);
  


/**********Kas nimi includes?******* */


const sona = prompt("Sisestage nimi:");
if (nimed.includes(sona)) {
  console.log(`${sona} on massiivis.`);
} else {
  console.log(`${sona} ei ole massiivis.`);
}




/***********Sünniaeg ja vanus********* */

const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    { nimi: "Artjom Vinogradov", isikukood: "50511020991"},
    // Lisa kontrollimiseks oma nimi ja isikukood
    ];

    
// Meetod sünnikuupäeva ja vanuse leidmiseks
      function LeiaVanus(isikukood) {
        if (isikukood.length !== 11) {
          return "Vigane isikukood";
        }
      
        const päev = parseInt(isikukood.substr(5, 2));
        const kuu = parseInt(isikukood.substr(3, 2));
        const aasta = parseInt("19" + isikukood.substr(1, 2));
      
        const sünnikuupäev = new Date(aasta, kuu - 1, päev);
        const täna = new Date();
        const vanus = täna.getFullYear() - sünnikuupäev.getFullYear();
      
        return {
          sünnikuupäev: sünnikuupäev.toDateString(),
          vanus: vanus,
        };
      }
      
      // Lisame sünnikuupäeva ja vanuse iga inimese andmetele
      for (const inimene of inimesteAndmed) {
        const tulemus = LeiaVanus(inimene.isikukood);
        inimene.sünnikuupäev = tulemus.sünnikuupäev;
        inimene.vanus = tulemus.vanus;
      }
      
      // Kuvame inimeste andmed koos sünnikuupäeva ja vanusega
      for (const inimene of inimesteAndmed) {
        console.log(`Nimi: ${inimene.nimi}, Isikukood: ${inimene.isikukood}, Sünnikuupäev: ${inimene.sünnikuupäev}, Vanus: ${inimene.vanus}`);
      }
      


    
/***********Kaugushüpe*********** */

const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
    ];


function keskmineTulemus(tulemused) {
    const summa = tulemused.reduce((a, b) => a + b, 0);
    return (summa / tulemused.length).toFixed(2);
  }
  

  
  function parimTulemus(tulemused) {
    return Math.max(...tulemused);
  }
  

  for (const õpilane of opilased) {
    const keskmine = keskmineTulemus(õpilane.tulemused);
    const parim = parimTulemus(õpilane.tulemused);
    õpilane.keskmine = keskmine;
    õpilane.parim = parim;
  }


  
  for (const õpilane of opilased) {
    console.log(`Nimi: ${õpilane.nimi}, Parim tulemus: ${õpilane.parim}, Keskmine tulemus: ${õpilane.keskmine}`);
  }