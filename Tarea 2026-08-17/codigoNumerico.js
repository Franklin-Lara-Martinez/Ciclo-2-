import readline from "node:readline";

const cn = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

cn.question("Ingrese su codigo numerico de ocho digitos: ", (codigo) => {

    let codigoNumerico = parseInt(codigo);

    let codigoTexto = codigoNumerico.toString();

    let cuatroDigitos = codigoTexto.slice(0, 4);

    console.log(`Sus primeros cuatros digitos de su codigo son: ${cuatroDigitos}`);

    cn.close();
});