// Defineeri klassi õpetaja
class Opetaja {
  constructor(nimi) {
    this.nimi = nimi;
  }

  juhendab() {
    console.log(`${this.nimi} juhendab klassi.`);
  }
}

// Defineeri klassi õpilane
class Opilane {
  constructor(nimi) {
    this.nimi = nimi;
  }

  osaleb() {
    console.log(`${this.nimi} osaleb klassis.`);
  }
}

// Loome õpetaja ja õpilase näite
const opetaja = new Opetaja("Kokakunsti Meister");
const opilane = new Opilane("Algaja kokk");

// Kuvame teate, et õpetaja juhendab ja õpilane osaleb
opetaja.juhendab();
opilane.osaleb();
