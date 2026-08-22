
 import readline from "node:readline";
 
    const my = readline.createInterface ({
        input: process.stdin,
        output: process.stdout,
 });

// my.question("Ingrese el nombre del evneto: ", (evento) => {

//     let eventoMayusculas = evento.toUpperCase();
//     console.log(`Entrada del nombre: ${evento} \n Entrada en mayusculas: ${eventoMayusculas}`);
//     my.close();
// })


//  my.question("Ingrese su correo electronico: ", (correo) =>{
//     let correoMini = correo.toLowerCase();

//     console.log(`Correo electronico: ${correoMini}`);
//     my.close();
//  });


// my.question("Ingrese el numero de factura (FAC-45678): ", (factura) =>{
//     let factuNum = factura.slice(4);
//     console.log(`Numero de factura: ${factuNum}`);
//     my.close();
// });


// my.question("Ingrese su codigo de departamento (VEN-2026-045): ", (codigo) => {
//     let codigoDepar= codigo.slice(0,3);

//     console.log(`Codigo de departamento: ${codigoDepar}`);
//     my.close();

// });



 my.question("Ingrese un numero de referencia de 6 digitos: ", (referencia) => {
    let referenciaNum = parseInt(referencia);
    let referenciaText = referenciaNum.toString();

    let primerosDigitos = referenciaText.slice(0, 3);
   console.log(`Numero de referencia: ${referenciaNum} \n primeros 3 digitos: ${primerosDigitos}`);
   
   my.close();
 });


