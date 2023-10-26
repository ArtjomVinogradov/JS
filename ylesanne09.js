
/**********Nimi funktsioon******** */

function minuNimi() {
    console.log("Minu nimi on Artjom");
  }
  
  minuNimi();
  

/*********Noolfunktsioon********** */

const minuNimi = () => {
    console.log("Minu nimi on ChatGPT.");
};

minuNimi();



/*******Argumendiga funktsioon****** */


function estoniadata(data) {
        console.log("Tere " + data + "!");
    }
    
    estoniadata("Tänane kuupäev 26.10.2023");



/**********Teadmata hulk********* */


const arvud = [14, 22, 33, 41, 57];

const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);


/***********Secret funktsioon************** */

const secret= () => {
  

    const salajaneS6num = sisendS6num.replace(/[a, i, o, z, j,]/g, "*");

    return salajaneS6num;
}

const phrase = parseFloat(prompt("Sisestage phrase:"));
const salajaneVersioon = salajaneSonum(phrase);
console.log("Algne sõnum:", phrase);
console.log("Salajane versioon:", salajaneVersioon);



/************Unikaalsed nimed*************** */

const unikue= () => {
    const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];

    for (let nimi of nimed) {
        if (!unikue.includes(nimi)) {
            unikue.push(nimi);
        }
    }

    return unikue;
}
