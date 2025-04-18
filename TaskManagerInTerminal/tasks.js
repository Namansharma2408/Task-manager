const fs = require('fs');

function addTask(title){
    let tasks = [];
    try{
        const dataBuffer = fs.readFileSync('tasks.json');
        const dataJson = dataBuffer.toString();
        tasks = JSON.parse(dataJson);
    }
    catch(error){
        tasks = [];
    }
    const newTask = {
        title : title,
        completed: false
    }
    tasks.push(newTask);
    const updateJSON = JSON.stringify(tasks,null,2);
    fs.writeFileSync("tasks.json",updateJSON);
    console.log("Task added successFully!!");
}
function list(){
    try{
        const dataBuffer = fs.readFileSync('tasks.json');
        const dataJson = dataBuffer.toString();
        tasks = JSON.parse(dataJson);
        tasks.forEach((task,index) => {
            console.log(`${index+1}. ${task.title} : ${task.completed}`);
        }); 
    }catch(error){
        console.log("Unable to read tasks , make sure tasks.json exist or not");
    }
}
function markdone(title){
    try{
        const dataBuffer = fs.readFileSync('tasks.json');
        const dataJson = dataBuffer.toString();
        tasks = JSON.parse(dataJson);
        tasks.forEach((task) =>{
            if( task.title === title){
                task.completed = true;
            }
        });
        
    }catch(error){
        console.log("Task not marked done");
    }
    const updateJSON = JSON.stringify(tasks,null,2);
    fs.writeFileSync("tasks.json",updateJSON);
}
function deleteTask(title){
    try{
        const dataBuffer = fs.readFileSync('tasks.json');
        const dataJson = dataBuffer.toString();
        tasks = JSON.parse(dataJson);
        const newTasks = tasks.filter(task => task.title !== title);
        if( newTasks.length === tasks.length ){
            console.log("Task not found");
        }else{
            const updateJSON = JSON.stringify(newTasks,null,2);
            fs.writeFileSync("tasks.json",updateJSON);
            console.log(title , " Task deleted successfully");
        }
        
    }catch(error){
        console.log("Error in deleting task");
    }
    
}
module.exports = {
    addTask,
    list,
    markdone,
    deleteTask
}
