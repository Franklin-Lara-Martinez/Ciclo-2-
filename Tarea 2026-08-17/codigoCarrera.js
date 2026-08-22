import readline from "node:readline";

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el codigo de estudiante de carrera (U20260867) ", (codigo) => {
    
    let primerosCaracteres = codigo.slice(0,3);

    console.log(`Mostrando la 3 primeras letras de su codigo ${primerosCaracteres}`);

    rl.close();
});