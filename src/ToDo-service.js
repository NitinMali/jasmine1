function ToDoService(){
    this.todos = []
}
/*
ToDoService.prototype.addNewItem = function(item){
    return new Promise( (resolve, reject) => {
        this.todos.push(item);
        resolve(this.todos);
    });
}
*/

ToDoService.prototype.addNewItem = async function(item){
    await this.todos.push(item);
    return this.todos;
}

var todoService = new ToDoService();

module.exports = ToDoService