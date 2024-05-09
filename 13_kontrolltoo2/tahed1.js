class Tahearvaja {
  loetaht(taht, sona){}
}

class Sona extends Tahearvaja {
  constructor(sona){
    super();
    this.sona = sona.toLowerCase();
  }

  loetaht(sona){
    let loendamine = 0;
    for (let char of this.sona){
      if (char === sona.toLowerCase()){
        loendamine++;
      }
    }
    return loendamine;
  }
}

//Automaattestid
function runTests(){
  const sona = new Sona("pere");
  console.log("p tähede arv sõnas 'pere':", sona.loetaht('p'));
  console.log("e tähtede arv sõnas 'pere':", sona.loetaht('e'));
  console.log("a tähtede arv sõnas 'pere':", sona.loetaht('a'));
}

runTests();