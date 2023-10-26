/********Posiitivne või negatiivne******** */

const number = parseFloat(prompt("Sisestage number:"));

switch (true) {
    case number > 0:
        console.log("Number on positiivne.");
        break;
    case number < 0:
        console.log("Number on negatiivne.");
        break;
    case number === 0:
        console.log("Number on null.");
        break;
    default:
        console.log("See ei ole kehtiv number.");
}


/**********Restoran*********** */

const broneeringu  = parseFloat(prompt("Sisestage broneeringu :"));

switch (true) {
    case broneeringu  >= 1 && broneeringu <= 2:
        console.log("Valige laud kahele inimesele");
        break;
    case broneeringu  >= 3 && broneeringu <= 4:
        console.log("Valige laud neljale inimesele.");
        break;
    case broneeringu  >= 5 && broneeringu <= 6:
        console.log("Valige laud kuuele inimesele.");
        break;
    default:
        console.log("Valige suur laud.");
}
