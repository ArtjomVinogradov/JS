
    /*********Ostukorv*********** */


    const ostukorv1 = {
        tooted: [
          { nimi: 'Piim', hind: 3.60, kogus: 2 },
          { nimi: 'Leib', hind: 2.00, kogus: 1 },
          { nimi: 'Munad', hind: 1.50, kogus: 6 },
          { nimi: 'Juust', hind: 4.20, kogus: 1 },
          { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
        ],
      
        // Meetod ostukorvi sisu kuvamiseks
        kuvaSisu: function() {
          console.log("Ostukorvi sisu:");
          this.tooted.forEach(function(toode) {
            console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
          });
        },
      
        // Meetod toote lisamiseks ostukorvi
        lisaToode: function(nimi, hind, kogus) {
          this.tooted.push({ nimi, hind, kogus });
          console.log(`${nimi} lisatud ostukorvi.`);
        },
      
        // Meetod ostukorvi kogusumma arvutamiseks
        koguSumma: function() {
          let summa = 0;
          this.tooted.forEach(function(toode) {
            summa += toode.hind * toode.kogus;
          });
          return summa;
        },
      };
      
      ostukorv1.kuvaSisu();
      
      ostukorv1.lisaToode('Baltika9', 2.80, 2);

      console.log('Ostukorvi kogu summa:', ostukorv1.koguSumma());
      