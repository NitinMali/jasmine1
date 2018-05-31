function ToDoService(){
    this.todos = []
}

ToDoService.prototype.addNewItem = function(item){
    return new Promise( (resolve, reject) => {
        this.todos.push(item);
        resolve(this.todos);
    });
}

var todoService = new ToDoService();

