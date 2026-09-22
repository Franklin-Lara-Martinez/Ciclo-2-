import readline from "node:readline";

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el total de su compra: ", (compraTotal) =>  {
    
    compraTotal = parseFloat(compraTotal)


     if (compraTotal >= 500){
            console.log(`Su envio es gratis su compra si aplica $${compraTotal.toFixed(2)}`);

        }else {
            console.log(`Lo sentimos su compra no aplica a envio gratis`);
        }
       
        rl.close();
});
