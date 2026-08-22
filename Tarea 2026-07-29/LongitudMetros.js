import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese una longitud expresada en metros ", function(metros){
    let metrosConvertidos = parseFloat(metros);
    
    let equivaCentrimetros = metrosConvertidos * 100;

    console.log(`Resultado final de metros a centimetros: ${equivaCentrimetros.toFixed(2)}cm`);

    rl.close();
});