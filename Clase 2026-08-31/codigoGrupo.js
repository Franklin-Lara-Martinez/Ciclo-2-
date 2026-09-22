import readline from "node:readline";

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el nombre del destinatario", (nombre) => {
    rl.question("Peso del paquete en Kilogramos ", (peso) => {
        rl.question("Precio promedio de cada prudcto", (precio) => {
            rl.question("Ingrese la distancia dele envio en kilogramos ", (distancia) => {

                let pesoPaquete = parseFloat(peso);
                let preciokilogramos = parseFloat(precio);
                let distanciaKilometros = parseFloat(distancia);

                let costoPeso = pesoPaquete * preciokilogramos;
                let costoAdicional = 0 
                let precioTotal;

                if ( distancia > 100 ){
                    costoAdicional = 5 
                    precioTotal = costoPeso + costoAdicional
                    console.log(`Nombre del destinatario: ${nombre.toUpperCase()} \n precio final con costo adicional ${precioTotal.toFixed(2)}`);
                }else{
                    precioTotal = costoPeso;
                     console.log(`Nombre del destinatario: ${nombre.toUpperCase()} \n precio final sin coste ${precioTotal.toFixed(2)}`);
                }
                      
                rl.close();

            })
        })
    })
})