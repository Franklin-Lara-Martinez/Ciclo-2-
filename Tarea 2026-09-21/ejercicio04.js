import readline from "node:readline";

const actividad = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

actividad.question("Ingrese la cantidad de entradas vendidas diariamente: ", (entradas) => {

    let entradasVendidas = parseInt(entradas);
    let totalAcumulado = 0;


    for(let dia =1; dia <= 5; dia++) {
        
        totalAcumulado += entradasVendidas;

        console.log(`Dia ${dia} entradas vendidas: ${entradasVendidas}`);
    }

    console.log(`El total de las entradas vendidas es de: ${totalAcumulado}`);

    actividad.close();
});
