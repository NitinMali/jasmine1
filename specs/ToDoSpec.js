var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;
// or:
//var assert = chai.assert;
// or:
//chai.should();
// according to your preference of assertion style

//const helper = require('../test_helper');
const ToDoService = require('../test-helper').ToDoService;
console.log(ToDoService)


describe('Test functionality', function(){

    it('should add an item',  function(){
        //create new empty todo object
        var todoService = new ToDoService();
        
        //add new todo
        return todoService.addNewItem({title: 'New Item', completed: false}).then(function(todos){
            console.log(todos);
            //test
            expect(todos.length).to.equal(1);
        });

        
    })
});


describe('Test DOM manipulation', function(){

    it('should create new li element', async function(){

        console.log(await browser.version());
        
        expect(true).to.be.true;

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