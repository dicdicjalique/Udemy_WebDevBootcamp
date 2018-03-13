window.setTimeout(function() {
    // put all of your JS code from the lecture here

    var todos = ["Buy new turtle"];

    var input = prompt("What would you like to do?");


    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }

    console.log("YOU QUIT THE APP.");
}, 500);

function listTodos() {    
    console.log("**********");
    todos.forEach(function(todoItem, i) {
        console.log(i + ": " + todoItem);
    });
    console.log("**********");
}

function addTodo() {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos
    todos.push(newTodo);
}

function deleteTodo() {    
    var index = prompt("Enter index to delete: ");
    todos.splice(index, 1);
}