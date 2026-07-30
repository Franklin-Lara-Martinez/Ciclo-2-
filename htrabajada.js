import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el nombre del empleado: ", function(nombre){
    rl.question("Ingrese las horas trnajsdas : ", function(horas){
        rl.question("Ingrese el pago por horas: ", function(pago){

            let horasTrabajadas = parseFloat(horas);
            let pagoHoras = parseFloat(pago);

            let salario = horasTrabajadas * pagoHoras;

            console.log("\n --- Salario semanal ---"); 
            console.log(`Empleado: ${nombre}`);
            console.log(`Salario semanal: ${salario.toFixed(2)}`);

            rl.close();

        });
    });
});