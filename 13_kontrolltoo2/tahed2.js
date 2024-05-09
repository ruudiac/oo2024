class Tahearvaja {
  loetaht(taht, lause) {}
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
}

class Lause extends Tahearvaja {
  constructor(lause) {
    super();
    this.lause = lause.toLowerCase();
  }

  sonaloendur() {
    return this.lause.split(" ").length;
  }

  saaSonad() {
    return this.lause.split(" ").map(sona => new Sona(sona));
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
}

// Rakendus
function analuusilause(lause) {
  const lauseObj = new Lause(lause);
  const taheloendurlauses = lauseObj.loetaht('a');
  const taheloendursonades = lauseObj.loendatahtisonades('a');
  const sonadeArv = lauseObj.sonaloendur();

  console.log("Sõnade arv lauses:", sonadeArv);
  console.log("A tähtede arv lauses:", taheloendurlauses);
  console.log("A tähtede arv iga sõna kohta:", taheloendursonades);

  const sonad = lauseObj.saaSonad();
  console.log("Klassi eksemplaride massiiv: ", sonad);
}

// Automaattest
function runTests() {
  const lause = "Mina olen Liina!";
  const lauseObj = new Lause(lause);
  const oodatudtahtilauses = 2;
  const oodatudtahtisonades = [1, 0, 1];

  const tegeliktahtlauses = lauseObj.loetaht('a');
  const tegeliktahtsonades = lauseObj.loendatahtisonades('a');

  console.log("A-tähtede arv lauses (oodatud):", oodatudtahtilauses);
  console.log("A-tähtede arv lauses (tegelik):", tegeliktahtlauses);
  console.log("A-tähtede arv iga sõna kohta (oodatud):", oodatudtahtisonades);
  console.log("A-tähtede arv iga sõna kohta (tegelik):", tegeliktahtsonades);
}

runTests();
analuusilause("Mina olen Liina");
