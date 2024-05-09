class Tahearvaja {
  loetaht(taht, tekst) {}
}

class Sona extends Tahearvaja {
  constructor(sona) {
    super();
    this.sona = sona.toLowerCase();
  }

  loetaht(taht) {
    let loendamine = 0;
    for (let char of this.sona) {
      if (char === taht.toLowerCase()) {
        loendamine++;
      }
    }
    return loendamine;
  }

  equals(sonamidavorrelda) {
    return this.sona === sonamidavorrelda.toLowerCase();
  }
}

class Lause extends Tahearvaja {
  constructor(lause) {
    super();
    this.lause = lause.toLowerCase();
    this.sonaList = [];
  }

  sonaloendur() {
    return this.lause.split(" ").length;
  }

  saaSonad() {
    const cleanedSentence = this.lause.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g," ");
    return cleanedSentence.split(" ").map(sona => new Sona(sona));
}


  loetaht(taht) {
    let loendamine = 0;
    for (let char of this.lause) {
      if (char === taht.toLowerCase()) {
        loendamine++;
      }
    }
    return loendamine;
  }

  loendatahtisonades(taht) {
    const sonad = this.saaSonad();
    const counts = [];
    sonad.forEach(sona => {
      counts.push(sona.loetaht(taht));
    });
    return counts;
  }
  leiaUuedSonad() {
    const newWords = [];
    const sonad = this.saaSonad(); // Hangi kõik sõnad
    sonad.forEach(sona => {
        const existingWordIndex = this.sonaList.findIndex(word => sona.equals(word));
        if (existingWordIndex === -1) { // Kui sõna pole varem leitud
            newWords.push(sona.sona);
            this.sonaList.push(sona.sona);
        } else { // Kui sõna on juba leitud, eemalda see varem leitud sõnade listist
            this.sonaList.splice(existingWordIndex, 1);
        }
    });
    return newWords;
}

leiaVarasemadSõnad() {
  const existingWords = [];
  const sonad = this.saaSonad();
  sonad.forEach(sona => {
      const index = this.sonaList.indexOf(sona.sona);
      if (index !== -1) {
          existingWords.push(sona.sona);
          this.sonaList.splice(index, 1); // Eemalda sõna varem leitud sõnade listist
      }
  });
  return existingWords;
}
}


// Rakendus
function analuusilause(lause) {
  const lauseObj = new Lause(lause);
  const newWords = lauseObj.leiaUuedSonad();
  const existingWords = lauseObj.leiaVarasemadSõnad();
  return { newWords, existingWords };
}

// Automaattest
function runTests() {
  const lause = "Minu nimi on Gertrud. Minu nimi ei ole Liina.";
  const lauseObj = new Lause(lause);

  const tegelikudUuedSõnad = lauseObj.leiaUuedSonad();
  const tegelikudVarasemadSõnad = lauseObj.leiaVarasemadSõnad();

}

runTests();
const tulemus = analuusilause("Minu nimi on Gertrud. Minu nimi ei ole Liina. Liina läks kooli. Gertrud läks kooli.")
console.log("Uued sõnad lauses:", tulemus.newWords);
console.log("Varasemad sõnad lauses:", tulemus.existingWords);
