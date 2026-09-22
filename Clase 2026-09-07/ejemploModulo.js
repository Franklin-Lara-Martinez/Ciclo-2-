import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== MENÚ =====");
console.log("1. Mostrar saludo");
console.log("2. Mostrar despedida");
console.log("3. Mostrar mensaje");

rl.question("Seleccione una opción: ", function(opcion) {

    switch (opcion) {

        case "1":
            console.log("¡Bienvenido al programa!");
            break;

        case "2":
            console.log("¡Hasta pronto!");
            break;

        case "3":
            console.log("Estamos aprendiendo JavaScript");
            break;

        default:
            console.log("Opción no válida");
            break;
    }

    rl.close();
});