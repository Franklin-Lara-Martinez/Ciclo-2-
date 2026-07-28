import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese una cierta cantidad de horas ",function(horas){
    horas = Number(horas);

    const minutos = (horas * 60 );

    console.log(`La cantidad de horas ingresadas equivalen a ${minutos} minutos`);

    rl.close()
})