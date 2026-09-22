import readline from "node:readline";

const edad = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

edad.question("Ingrese su nombre ", (nombre) => {
    edad.question("Ingrese su año de nacimiento ", (anio) => {

        let anioNacimiento = parseInt(anio);
        let fecha = new Date();
        let anioActual = fecha.getFullYear();

        let edadAproximada = anioActual - anioNacimiento;

        console.log(`El usuario ${nombre} tiene una edad aproximada de ${edadAproximada}`);

        edad.close();
    });
});