const fs=require('fs');
const texto = "Node es genial 💚";
fs.writeFileSync('texto.docx', texto);