import { log } from "node:console";

let fecha = new Date();

console.log(fecha);

let anio = fecha.getFullYear();

console.log(`Solamente el año ${anio}`);

let mes = fecha.getMonth() + 1;

console.log(`Solamente el mes ${mes}`);

let dia = fecha.getDate();

console.log(`Solamente el dia ${dia}`);

let semanaDia = fecha.getDay();

console.log(`Solamente el dia de la semana ${semanaDia}`);

console.log(".......................");

let hora = fecha.getHours();

console.log(`Solamente la hora ${hora}`);

let minutos = fecha.getMinutes();

console.log(`Solamnete los minutos ${minutos}`);

let segundos = fecha.getSeconds();

console.log(`Solamente los segundos ${segundos}`);

//Formato fecha completa 
console.log(`${anio}/${mes}/${semanaDia}`);