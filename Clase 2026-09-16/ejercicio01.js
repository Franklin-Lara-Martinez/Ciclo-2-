// 1-  Elabore un programa que permita al usuario realizar diferentes conversiones de medidas. El programa deberá mostrar el siguiente menú:
// 1. Metros a centímetros (metros* 100)
// 2. Kilómetros a metros (kilómetros *1000)
// 3. Horas a minutos (horas * 60)
// 4. Días a horas (días * 24h)

// Deberá solicitar al usuario:

//     La opción que desea realizar.
//     La cantidad que desea convertir.

import readline from "node:readline";

const conversiones = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("CONVERSION DE MEDIDAS");
console.log("1. Metros a centrimetros");
console.log("2. Kilometros a metros");
console.log("3. Horas a minutos");
console.log("4 . Dias a horas");

conversiones.question("Ingrese una opcion del menu (1,2,3 o 4)", (opcion) => {
  conversiones.question(
    "Ingrese la cantidad que desea convertir: ",
    (cantidad) => {
      cantidad = parseFloat(cantidad);
      let resultado;

      switch (opcion) {
        case "1":
         resultado = cantidad * 100;
          console.log(`Resultado: ${resultado},cm`);
          break;
        case "2":
          resultado = cantidad * 1000;
          console.log(`Resultado: ${resultado},m`);
          break;
        case "3":
          resultado = cantidad * 60;
          console.log(`Resultado: ${resultado},minutos`);
          break;
        case "4":
          resultado = cantidad * 24;
          console.log(`Resultado: ${resultado},horas`);
          break;
        default:
          console.log("Opcion no validad");
      }

      conversiones.close();
    },
  );
});
