import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el nombre de su producto ", function(NombreProducto){
    rl.question("Ingrese el precio del producto",function(PrecioProducto){
        rl.question("Ingrese la cantidad de su compra ", function(CantidadProducto){

            NombreProducto = String(NombreProducto);
            PrecioProducto = Number(PrecioProducto);
            CantidadProducto = Number(CantidadProducto);

            const TotalFinal = (PrecioProducto * CantidadProducto);
            console.log(`Su producto es  ${NombreProducto} , cantidad del producto de su compra ${CantidadProducto} , total a pagar es ${TotalFinal}`);
 
            rl.close();
        })
    })
})