$(document).ready(function(){

    var todoItems = new ToDoItems([
        new TodoItem({id: 1, description:"todo item 1"}),
        new TodoItem({id: 2, description:"todo item 4"}),
        new TodoItem({id: 3, description:"todo item 3"}),
        new TodoItem({id: 4, description:"todo item 4"}) 
    ])

    var todoItemsView = new TodoItemsView({
        model: todoItems
    })

    $("body").append(todoItemsView.render().$el)

})