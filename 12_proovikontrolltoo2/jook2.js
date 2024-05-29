//* Koosta klass Joogivaat, millel on ruumala ning sees oleva Joogi kogus liitrites. Koosta käsk etteantud Joogipudeli täitmiseks (juhul kui Jooki jagub). Koosta käsklus kogu Joogivaaditäie Joogi villimiseks Joogipudelitesse, tühjad pudelid tuleb käsule ette anda. Koosta töö kontrolliks automaattestid.

class Jook {
  constructor(nimetus, omahindLiitris, erikaal) {
    this.nimetus = nimetus;
    this.omahindLiitris = omahindLiitris;
    this.erikaal = erikaal;
  }
}

class Joogivaat {
  constructor(ruumala, kogusLiitrites, jook = null) {
    this.ruumala = ruumala; // Vaatide kogumaht
    this.kogusLiitrites = kogusLiitrites; // Kogus liitrites
    this.jook = jook; // Vaadis olev jook
  }

  // Joogipudeli täitmine
  täidaPudel(pudel) {
    if (!this.jook) {
      throw new Error("Vaat ei sisalda jooki");
    }
    if (this.kogusLiitrites >= pudel.maht) {
      pudel.jook = this.jook;
      this.kogusLiitrites -= pudel.maht;
      return true;
    } else {
      return false;
    }
  }

  // Kogu vaadi joogi villimiseks pudelitesse
  villiPudelitesse(pudelid) {
    for (let pudel of pudelid) {
      if (this.kogusLiitrites < pudel.maht) {
        break;
      }
      this.täidaPudel(pudel);
    }
  }
}

class Joogipudel {
  constructor(maht, pudelityyp, mass, taaraMaksumus, jook = null) {
    this.maht = maht;
    this.pudelityyp = pudelityyp;
    this.mass = mass;
    this.taaraMaksumus = taaraMaksumus;
    this.jook = jook;
  }

  // Massi leidmine
  leiaKoguMass() {
    if (this.jook) {
      return this.mass + (this.maht * this.jook.erikaal);
    } else {
      return this.mass;
    }
  }

  // Omahindade leidmine
  leiaOmahind() {
    if (this.jook) {
      return this.taaraMaksumus + (this.maht * this.jook.omahindLiitris);
    } else {
      return this.taaraMaksumus;
    }
  }
}

const assert = require('assert');

// Testid
const jook1 = new Jook('Õlu', 1.5, 1.01); // Nimetus, omahindLiitris, erikaal
const vaat1 = new Joogivaat(10, 10, jook1); // Ruumala, kogusLiitrites, jook

const pudel1 = new Joogipudel(0.5, 'Plastik', 0.05, 0.1); // Maht, pudelityyp, mass, taaraMaksumus

// Test ühe pudeli täitmiseks
assert.strictEqual(vaat1.täidaPudel(pudel1), true);
assert.strictEqual(vaat1.kogusLiitrites, 9.5); // 10 - 0.5
assert.strictEqual(pudel1.jook, jook1);
console.log('Ühe pudeli täitmise test läbitud');

// Test pudelite massi ja omahinna arvutamiseks peale täitmist
assert.strictEqual(pudel1.leiaKoguMass(), 0.555); // 0.05 (pudeli mass) + 0.5 * 1.01 (joogi mass)
assert.strictEqual(pudel1.leiaOmahind(), 0.85); // 0.1 (taara maksumus) + 0.5 * 1.5 (joogi omahind)
console.log('Täitmise järgsed pudeli massi ja omahinna testid läbitud');

// Test kogu vaadi joogi villimiseks pudelitesse
const pudelid = [
  new Joogipudel(0.5, 'Plastik', 0.05, 0.1), // Maht, pudelityyp, mass, taaraMaksumus
  new Joogipudel(1, 'Plastik', 0.1, 0.15),
  new Joogipudel(2, 'Plastik', 0.15, 0.2)
];

vaat1.villiPudelitesse(pudelid);

// Kontrollime, et iga pudel on täidetud ja kogus vaadis on korrektne
assert.strictEqual(pudelid[0].jook, jook1);
assert.strictEqual(pudelid[1].jook, jook1);
assert.strictEqual(pudelid[2].jook, jook1);

assert.strictEqual(vaat1.kogusLiitrites, 6.0); // Algne 9.5 - 3.5 (0.5 + 1 + 2)
console.log('Kogu vaadi joogi villimise test läbitud');
