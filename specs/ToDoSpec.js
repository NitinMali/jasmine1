describe('Test functionality', function(){

    it('should add an item',  function(){
        //create new empty todo object
        var todoService = new ToDoService();
        
        //add new todo
        todoService.addNewItem({title: 'New Item', completed: false});

        //test
        expect(todoService.todos.length).toBe(1);
    })
});


describe('Test DOM manipulation', function(){

    it('should create new li element', function(){

        var page = require('webpage').create();
        console.log('The default user agent is ' + page.settings.userAgent);
        page.settings.userAgent = 'SpecialAgent';
        page.open('http://localhost/jasmine1/', function(status) {
            if (status !== 'success') {
                console.log('Unable to access network');
            } else {
                var ua = page.evaluate(function() {
                    //return document.getElementById('qua').textContent;
                     //remove all li
                    document.getElementById('myUL').innerHTML('');

                    //add input value
                    document.getElementById('myUL').value = 'My first todo';

                    var newtodoCtrl = new ToDoController();

                    //add new todo
                    newtodoCtrl.addtoToDo();

                    expect(document.getElementById("myUL").getElementsByTagName("li").length).toBe(1);
                });
                console.log(ua);
            }
            phantom.exit();
        });
        /*
        //remove all li
        document.getElementById('myUL').innerHTML('');

        //add input value
        document.getElementById('myUL').value = 'My first todo';

        var newtodoCtrl = new ToDoController();

        //add new todo
        newtodoCtrl.addtoToDo();

        expect(document.getElementById("myUL").getElementsByTagName("li").length).toBe(1);
        */
    })
})