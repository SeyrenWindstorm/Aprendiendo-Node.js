const fs = require ("fs");
console.log("inicio del programa"); 
const data = fs.readFileSync("archivo.txt" , "utf8");
console.log(data);
console.log("fin del programa");