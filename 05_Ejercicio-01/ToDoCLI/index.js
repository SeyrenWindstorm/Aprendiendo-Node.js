import {createInterface} from "readline";
import chalk from "chalk";

const task = [];

const rl = createInterface({
   input:process.stdin,
   output:process.stdout
});

function addTask() {
    rl.question(chalk.bgMagentaBright(""),(task)=>{
        tasks.push({task, completed: false})
        console.log(chalk.green.bold("Tarea agregada con exito"));
        displayMenu();
        chooseOption();
        console.log(tasks);
    });//fin rl.question
}//fin cun


function listsTasks() {
let status;
    console.log(chalk.yellow.bold("Lista de tareas"));
if (tasks.length === 0) {
    console. log(chalk.bgRed("No hay tareas por hacer"));
} else {
    tasks.forEach ((task, index) => {   
    status = task.completed ? "Si" : "No" ;
    console.log(chalk.blueBright(`${index + 1}.${status} - ${task.task}`))
   });
displayMenu();
chooseOption();
} 
}

function completeTask(){



}


function displayMenu(){
    console.log(chalk.green.bold(" Lista To Do :) "));
    console.log(chalk.blue.bold(" Menu de opciones "));
    console.log("1. Agregar");
    console.log("2. Listar");
    console.log("3. Completar");
    console.log("4. Salir");
}

function chooseOption(){
    rl.question("Escribe el numero de una opcion ",(choice) => {
switch (choice){
case "1": 
addTask();
break;

case "2": 
listsTasks();
break;

case "3": 
console.log("Completar tareas");
break;

case "4": 
console.log(chalk.red.bold("Salir"));
rl.close();
break;

default: 
console.log(chalk.red.bold("Opcion invalida"));
displayMenu();
chooseOption();
break;

} // Switch

}); // Fin del rl.question

} // Fin de la opcion

displayMenu();
chooseOption();
