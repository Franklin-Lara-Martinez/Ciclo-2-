import readline from "node:readline";

const transporte = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

transporte.question("Ingrese su gasto diario en transporte: ", (gasto) => {

    let gastoDiario = parseFloat(gasto);
    let gastoTotal = 0;

    for(let dia=1; dia <= 6; dia++){
        
        gastoTotal = gastoTotal + gastoDiario;

        console.log(`Dia ${dia} su gasto acumulado $${gastoTotal.toFixed(2)}`);
        
    }

    console.log(`El total acumulado de gasto en transporte diario fue: $${gastoTotal.toFixed(2)}`);

    transporte.close();

});
