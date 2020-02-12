var TodoItemsView = Backbone.View.extend({
    tagName:"ul",
    id:"todoitems",
    initialize: function(options){
        console.log(options);
        if(!options && options.model){
            throw new Error("collection model is not present!")
        }
        this.model.on("add", this.onAddTodoItem, this)
        this.model.on("remove", this.onRemoveTodoItem, this);
    },
    events:{
        "click #clickadd":"onClickAdd",
        "keypress #newtodoitem":"onKeyPress"
    },
    onKeyPress: function(eventObject){
        console.log(eventObject)
        console.log(eventObject.keyCode)
        //check for enter - 13
        if(eventObject.keyCode == 13){
            this.onClickAdd()
        }
    },
    onAddTodoItem: function(item){
        console.log("New todo item added!");
        console.log(item);
        var addView = new TodoItemView({model: item})
        this.$el.append(addView.render().$el)

    },
    onClickAdd: function(){
        console.log("Add button clicked!");
        console.log(this.$("#newtodoitem").val());
        var newitem = this.$("#newtodoitem").val()
        //var newItemValue = 
        if(newitem != ""){
            var todoItem = new TodoItem({description:newitem})
            // this.model represents the collection!
            //adding new item will fire add event
            //add event can be captured in intialize
            this.model.add(todoItem)
            //console.log(this.model);
            this.$("#newtodoitem").val("")
        }
        
    },
     onRemoveTodoItem: function(item){
        this.$("li#" + item.id).remove()
        console.log("Current collection from onRemoveTodoItem: ");
        console.log(this.model);
    } ,
    render: function(){
        console.log("Current collection from render: ");
        console.log(this.model);
        var self = this
        //inputfield
        this.$el.append("<input type='text' id='newtodoitem' autofocus></input>")
        this.$el.append("<button id='clickadd'>Add</button>")    


        this.model.each(function(todoItem){
            var view = new TodoItemView({model: todoItem})
            self.$el.append(view.render().$el)
        })
        return this
    }
})