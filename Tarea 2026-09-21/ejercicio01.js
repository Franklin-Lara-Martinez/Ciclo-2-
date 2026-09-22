import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Cuanto dinero ahorra cada dia: ", (respeusta) => {

    const ahorroDiario = parseFloat(respeusta);

    let ahorroTotal = 0;

    for (let dia =1; dia<=5; dia++){
        ahorroTotal = ahorroTotal+ahorroDiario;
        console.log(`Dia ${dia} ahorro: $${ahorroTotal}`);

    }
    console.log(`Ahorro total: $${ahorroTotal.toFixed(2)}`);
    rl.close();

});