const tasks = require('./tasks.js');

const argv = process.argv;
const command = argv[2];
const title = argv[3];
if( command === "add"){
    tasks.addTask(title);
}else if( command === "list"){
    tasks.list();
}else if( command === "done"){
    tasks.markdone(title);
}else if( command === "delete"){
    tasks.deleteTask(title);
}else{
    console.log("Unknown command");
}
