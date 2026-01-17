console.log("Hola Node JS 👋");
const fecha = new Date();
console.log(fecha);
const fs=require('fs');
const tareas = `
1. Ir al gimnasio
2. Buscar al niño al colegio
3. Pagar los gastos comunes
`;
fs.writeFileSync('tareas.txt', tareas);
