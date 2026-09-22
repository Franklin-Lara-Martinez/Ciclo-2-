import readline from "node:readline";

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el año: ", (anio) => {
    rl.question("Ingrese el mes: ", (mes) => {
        rl.question("Ingrese el dia: ", (dia) => {

        let fecahActual = new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia));

        console.log(`Fecha creada ${fecahActual}`);
            rl.close();
        });
    });
});