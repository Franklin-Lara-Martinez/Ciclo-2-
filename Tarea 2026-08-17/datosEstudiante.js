import console from "node:console";
import readline from "node:readline";

const de = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

de.question("Ingrese el nombre del estudiante: ", (nombre) => {
    de.question("Ingrese un apellido del estudiante: ", (apellido) => {
        de.question("Ingrese el año de ingreso del estudiante: ", (anio) => {
            de.question("Ingrese la cuota mensual del estudiante: ", (cuota) => {

                let nombreMayusculas = nombre.toUpperCase();
                let apellidoMayusculas = apellido.toLocaleUpperCase();

                let inicioLetras = apellido.slice(0, 3);

                let anioNumber = parseInt(anio);
                let anioTexto = anioNumber.toString();
                let anioDigitos = anioTexto.slice(2,4);

                let cuotaEstudiante = parseFloat(cuota);
                let cuotaFinal = cuotaEstudiante.toFixed(2);

                console.log(`\n--- El nombre del estudiante es: ${nombreMayusculas} ---\n El apellido del estudiante es: ${apellidoMayusculas}` );
                console.log(`Las primeras letras de su apellido son: ${inicioLetras} \n El año de ingreso del estudiante es: ${anioDigitos}`);
                console.log(`La cuota mensual del estudiante es: ${cuotaFinal}`);

                de.close();
            });
        });
    });
});