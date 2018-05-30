function ToDo(){
    this.todos = []
}

ToDo.prototype.addtoToDo = function(item){
    this.todos.push(item);
}

let todoObj = new ToDo();

