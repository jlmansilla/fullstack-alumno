const fs=require('fs');
const tareas = [
    {text: 'Ir al gimnasio'},
    {text: 'Buscar al niño al colegio'},
    {text: 'Pagar los gastos comunes'},
];
fs.writeFileSync('tareas.json', JSON.stringify(tareas));