import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el precio del producto: ", function(precioUnitario){
    rl.question("Ingrese la cantidad de su producto: ", function(CantidadProducto){

        let precio = parseFloat(precioUnitario);
        let Cantidad = parseInt(CantidadProducto);

        let totalPago = precio * Cantidad;

        console.log(`Total a pagar: ${totalPago}`);

        rl.close();
    });
});