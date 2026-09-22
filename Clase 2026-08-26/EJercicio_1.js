import readline from "node:readline";

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese su nombre: ", (nombre) =>  {
    rl.question("Ingrese su edaad: ", (edad) => {

        edad = parseInt(edad);

        if (edad >= 0 && edad <= 12){
            console.log(`${nombre} eres mayor de edad`);
        }
        else if (edad >= 18 && edad <= 25) {
            console.log(`${nombre} eres menor de edad`);

        }else{
            console.log(``)
        }
        
        rl.close();
    });
});
