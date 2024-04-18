// Ülemklass
class Puu {
  constructor(nimi) {
    this.nimi = nimi;
  }

  kasvab() {
    console.log(`${this.nimi} kasvab.`);
  }
}

// Alamklass 1
class Okaspuu extends Puu {
  constructor(nimi, okast) {
    super(nimi);
    this.okkaid = okast;
  }

  kasvab() {
    super.kasvab();
    console.log(`See on okaspuu ja sellel on ${this.okast} okast.`);
  }
}

// Alamklass 2
class LehtPuu extends Puu {
  constructor(nimi, lehti) {
    super(nimi);
    this.lehti = lehti;
  }

  kasvab() {
    super.kasvab();
    console.log(`See on lehtpuu ja sellel on ${this.lehti} lehte.`);
  }
}

// Näitprogramm
const kuusk = new Okaspuu("Kuusk", 200);
const tamm = new LehtPuu("Tamm", 500);

kuusk.kasvab();
tamm.kasvab();