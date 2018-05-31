function ToDoController(){

}

ToDoController.prototype.addtoToDo = function(){
    let title = document.getElementById('myInput').value;

    if(title) {
        let item = {title: title, completed: false}
        todoService.addNewItem(item).then((todos) => {
            console.log(todos)
            this.render(item)
        });
    }
}

ToDoController.prototype.render = function(item){
    let liEle = document.createElement('li');
    let liTextNode = document.createTextNode(item.title);
    liEle.appendChild(liTextNode);

    document.getElementById('myUL').appendChild(liEle);

    let spanEle = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    spanEle.className = "close";
    spanEle.appendChild(txt);
    
    liEle.appendChild(spanEle);
}


let todoCtrl = new ToDoController();