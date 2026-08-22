import readline from "node:readline";

const un = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

un.question("Ingrese el nombre completo del estudiante: ", (nombre) => {
    
    let nombreMayusculas = nombre.toUpperCase();
    let nombreMinusculas = nombre.toLowerCase();

    console.log(`El nombre del estudiante en mayusculas es: ${nombreMayusculas} \n El nombre del estudiante en minusculas es: ${nombreMinusculas}`);
  
    un.close();
});