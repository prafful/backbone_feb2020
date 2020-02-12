$(document).ready(function(){

    var todoItems = new ToDoItems([
       new TodoItem({description:"todo item 1"}),
        new TodoItem({description:"todo item 4"}),
        new TodoItem({description:"todo item 3"}),
        new TodoItem({description:"todo item 4"}) 
    ])

    var todoItemsView = new TodoItemsView({
        model: todoItems
    })

    $("body").append(todoItemsView.render().$el)

})