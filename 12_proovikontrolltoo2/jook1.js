//* Koosta klass Jook, millel on nimetus, liitri omahind ning erikaal. Koosta klass Joogipudel, millel on maht, pudelityyp, mass ning taara maksumus. Samuti sees olev Jook, mis võib ka puududa. Koosta Joogipudeli jaoks käsklus, mis leiaks Joogipudeli massi koos Joogiga (juhul kui see olemas), samuti käsklus sellise komplekti omahinna leidmiseks. Koosta tööks automaattestid. 

class Jook {
  constructor(nimetus, omahindLiitris, erikaal) {
      this.nimetus = nimetus;
      this.omahindLiitris = omahindLiitris;
      this.erikaal = erikaal;
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

  leiaKoguMass() {
      if (this.jook) {
          return this.mass + (this.maht * this.jook.erikaal);
      } else {
          return this.mass;
      }
  }

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
const pudel1 = new Joogipudel(0.5, 'Plastik', 0.05, 0.1, jook1); // Maht, pudelityyp, mass, taaraMaksumus, jook

// Testid massi leidmiseks koos joogiga
assert.strictEqual(pudel1.leiaKoguMass(), 0.555); // 0.05 (pudeli mass) + 0.5 * 1.01 (joogi mass)
console.log('Massi test läbitud');

// Testid omahinna leidmiseks koos joogiga
assert.strictEqual(pudel1.leiaOmahind(), 0.85); // 0.1 (taara maksumus) + 0.5 * 1.5 (joogi omahind)
console.log('Omahinna test läbitud');

// Testid joogita pudeli jaoks
const pudel2 = new Joogipudel(0.5, 'Klaas', 0.2, 0.3);// Maht, pudelityyp, mass, taaraMaksumus

assert.strictEqual(pudel2.leiaKoguMass(), 0.2); // Ainult pudeli mass
console.log('Massi test joogita läbitud');

assert.strictEqual(pudel2.leiaOmahind(), 0.3); // Ainult taara maksumus
console.log('Omahinna test joogita läbitud');
