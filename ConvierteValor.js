import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese cualquier tipo de dato ", function(valor){

    let tipoValor = parseFloat(valor); 
    let tipoValor2 = isNaN(tipoValor);
    
    console.log(`El valor ingresado por el usuario es: ${valor}`);
    console.log(tipoValor);
    console.log(tipoValor2);

    rl.close();
    
});