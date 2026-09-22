import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número: ", function(numero) {

    numero = Number(numero);

    console.log("1. Calcular el doble");
    console.log("2. Calcular el triple");
    console.log("3. Calcular el cuadrado");

    rl.question("Seleccione una opción: ", function(opcion) {

        switch (opcion) {

            case "1":
                console.log(`El doble es: ${numero * 2}`);
                break;

            case "2":
                console.log(`El triple es: ${numero * 3}`);
                break;

            case "3":
                console.log(`El cuadrado es: ${numero * numero}`);
                break;

            default:
                console.log("Opción incorrecta");
                break;
        }

        rl.close();
    });
});