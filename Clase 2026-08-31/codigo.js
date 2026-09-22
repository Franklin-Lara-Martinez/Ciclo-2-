import readline from "node:readline";

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el codigo del departamento:", (codigo) => {
    codigo = codigo.toUpperCase();

    let departamento = codigo.slice(4, 7);

    console.log(`El codigo ingresado es ${codigo}`);

    if(departamento == "VEN"){
        console.log(`El codigo pertenece al departamento de ventas`);
    }else{
        console.log(`El codigo no pertenece al departamento de ventas`);
    }

    rl.close();
    
});