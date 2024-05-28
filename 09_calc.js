class Calculator {
    constructor() {
      this.expression = '';
    }
  
    // Funktsioon, mis lisab arvud ja operaatorid ekraanile
    appendToDisplay(value) {
      this.expression += value;
    }
  
    // Funktsioon, mis tühjendab ekraani
    clearDisplay() {
      this.expression = '';
    }
  
    calculate() {
        try {
          if (this.expression.includes("/0")) {
            return 0; // Jagamine nulliga annab 0
          }

          return new Function('return ' + this.expression)();
        } catch (error) {
          console.error("Viga arvutamisel:", error);
          return NaN;
        }
    }
  }
  
  // Testid  
  function runCalculatorTests() {
    let calculator = new Calculator();
  
    // Test arvutus
    calculator.appendToDisplay("2+3*4");
    console.assert(calculator.calculate() === 14, "Lihtsa arvutuse test läbikukkunud");
  
    // Test jagamine nulliga
    calculator.clearDisplay();
    calculator.appendToDisplay("10/0");
    console.assert(calculator.calculate() === 0, "Jagamine nulliga test läbikukkunud");
  
    // Test valesti vormistatud avaldist
    calculator.clearDisplay();
    calculator.appendToDisplay("2++3");
    console.assert(isNaN(calculator.calculate()), "Valesti vormistatud avaldise test läbikukkunud");

    calculator.clearDisplay();
    calculator.appendToDisplay("2*3");
    console.assert(calculator.calculate() === 6, "Korrutamise test läbikukkunud");
  
    console.log("Kalkulaatori testid läbitud.");
  }
  
  runCalculatorTests();
  