import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("¿Cuántas horas duró cada préstamo? ", (respuesta)=>{
    const horasPorPrestamo = Number(respuesta);
    const costoHora = 2.25;
    let recaudacionTotal = 0;

    for(let prestamo=1; prestamo <=4; prestamo++){
        const costoPrestamo = horasPorPrestamo * costoHora;
        recaudacionTotal = recaudacionTotal + costoPrestamo;
        console.log(`Préstamo ${prestamo}: $${costoPrestamo.toFixed(2)}`);
    }
    console.log(`Recaudación total: $${recaudacionTotal.toFixed(2)}`);
    rl.close()
});