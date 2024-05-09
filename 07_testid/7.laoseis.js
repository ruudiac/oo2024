// Liides
class Inventory {
  addProduct(name, quantity) {}
  removeProduct(name, quantity) {}
  getProductQuantity(name) {}
}

// Realiseeriv klass
class SimpleInventory extends Inventory {
  constructor() {
    super();
    this.products = new Map();
  }

  addProduct(name, quantity) {
    if (this.products.has(name)) {
      this.products.set(name, this.products.get(name) + quantity);
    } else {
      this.products.set(name, quantity);
    }
  }

  removeProduct(name, quantity) {
    if (this.products.has(name)) {
      let currentQuantity = this.products.get(name);
      if (currentQuantity >= quantity) {
        this.products.set(name, currentQuantity - quantity);
      } else {
        console.log(`Pole piisavalt ${name} laos.`);
      }
    } else {
      console.log(`${name} ei leitud laost.`);
    }
  }

  getProductQuantity(name) {
    return this.products.get(name) || 0;
  }
}


// Testid
function runTests() {
  let inventory = new SimpleInventory();

  inventory.addProduct("Õun", 10);
  console.assert(inventory.getProductQuantity("Õun") === 10, "Test 1 läbikukkunud");

  inventory.removeProduct("Õun", 10);
  console.assert(inventory.getProductQuantity("Õun") === 5, "Test 2 läbikukkunud");

  inventory.removeProduct("Õun", 5);
  console.assert(inventory.getProductQuantity("Õun") === 0, "Test 3 läbikukkunud");

  inventory.removeProduct("Apelsin", 5);
  console.assert(inventory.getProductQuantity("Apelsin") === 0, "Test 4 läbikukkunud");

  console.log("Kõik testid läbitud.");
}


// Näitprogramm
function main() {
  let inventory = new SimpleInventory();

  inventory.addProduct("Õun", 10);
  inventory.addProduct("Apelsin", 5);

  console.log("Algne laoseis:");
  console.log("Õun:", inventory.getProductQuantity("Õun"));
  console.log("Apelsin:", inventory.getProductQuantity("Apelsin"));

  inventory.removeProduct("Õun", 3);
  console.log("Peale 3 Õuna eemaldamist:");
  console.log("Õun:", inventory.getProductQuantity("Õun"));

  runTests();
}

main();
