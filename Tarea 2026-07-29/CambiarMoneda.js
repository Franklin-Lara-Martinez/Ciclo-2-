import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese una cantidad de dinero en dolares: ",function(dolares){
    
    let euro = 0.88;

    let dolaresNum = parseFloat(dolares);
    let tasaEuro = parseFloat(euro);

    let converEuros = dolaresNum * tasaEuro;

    console.log(`Usted ingreso: $${dolaresNum}: que equivalen a €${converEuros} euros `);

        rl.close();
});