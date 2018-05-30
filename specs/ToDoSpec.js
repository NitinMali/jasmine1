describe('Test functionality', function(){

    it('should add an item',  function(){
        //create new empty todo object
        let todo = new ToDo();
        
        //add new todo
        todo.addNewItem({title: 'New Item', completed: false});

        //test
        expect(todo.todos.length).toBe(1);
    })
})