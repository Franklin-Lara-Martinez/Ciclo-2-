// EJERCICIO2:  Elabore un programa que permita calcular el total a pagar por una compra.

// El programa deberá solicitar al usuario:

//     Nombre del producto.
//     Precio unitario del producto.
//     Cantidad comprada.

// Posteriormente, deberá mostrar el siguiente menú:
// 1. Compra normal (no aplica ningún cargo adicional)
// 2. Compra con envío (agregar $3.50 al total)
// 3. Compra con empaque especial (agregar $2.00 al total)

// Finalmente, muestre:

//     Nombre del producto en letras mayúsculas.
//     Cantidad comprada.
//     Total a pagar con dos cifras decimales.

import readline from "node:readline";
import { compose } from "node:stream";

const compra = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

compra.question("Ingrese el nombre de su producto ", (nombreProducto) => {
    compra.question("Ingrese el precio unitario del producto ", (datosPrecio) => {
        compra.question("Ingrese la cantidad comprada ", (datosCantidad) => {

            let precio = parseFloat(datosPrecio);
            let cantidad = parseInt(datosCantidad);

            console.log("TIPO DE COMPRA");
            console.log("1. Compra normal");
            console.log("2. Compra con envio");
            console.log("3. Compra con empaque especial");

            compra.question("Ingrese una de las opciones (1,2 o 3)", (opcion) => {
                
                opcion = parseInt(opcion);
                let total; 

                switch (opcion) {
                    case 1: 
                    total = precio * cantidad
                    break;
                    case 2: 
                    total = (precio * cantidad) + 3.50;
                    break;
                    case 3: 
                    total = (precio * cantidad) + 2.00;
                    break;
                    default: 
                    console.log("Opcion no valida");
                }

                console.log("DETALLE DE LA COMPRA");
                console.log(`Producto: ${nombreProducto.toUpperCase()}\nCantida:${cantidad}\n Total a pagar:${total.toFixed(2)}`);

                compra.close();

            });
        });
    });
});

