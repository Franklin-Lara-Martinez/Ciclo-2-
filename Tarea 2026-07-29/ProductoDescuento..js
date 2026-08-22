import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el precio del producto: ", function(precio){
    rl.question("Ingrese el porcentaje de descuento que se le aplicara ", function(descuento){
       
        let PrecioProducto = parseFloat(precio);
        let descuentoProducto = parseFloat (descuento);

        let descuentoAplicado = PrecioProducto * descuentoProducto / 100;
        let precioFinal = PrecioProducto - descuentoAplicado;


        console.log("EL precio del producto es: ", (precio));
        console.log(`El porcentaje del descuento es: ${descuentoAplicado}`);
        console.log(`El total a pagar es: ${precioFinal.toFixed(2)}`);

        rl.close();
    });
});