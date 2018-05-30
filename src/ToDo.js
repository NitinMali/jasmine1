function ToDo(){
    this.todos = []
}

ToDo.prototype.addNewItem = function(item){
    this.todos.push(item);
}

ToDo.prototype.addtoToDo = function(){
    let title = document.getElementById('myInput').value;

    if(title) {
        let item = {title: title, completed: false}
        this.todos.push(item);
        this.render(item);
    }
    
}

ToDo.prototype.render = function(item){
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

let todoObj = new ToDo();

