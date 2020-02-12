var TodoItemView = Backbone.View.extend({
    tagName:"li",
    intialize: function(options){
        if(!options && options.model){
            throw new Error("model is not present!")
        }
        //below line does not execute - check!
        this.model.on("change", this.render, this)
    },
    events:{
        "click #toggle":"onClickToggle",
        "click #delete": "onClickDelete"
    },
    onClickDelete: function(){
        console.log("Item being deleted");
        this.model.destroy()
        console.log(this.model);
    },
    modelUpdated: function(e){
        console.log("Model updated");
    },
    onClickToggle:function(){
        console.log("Checkbox clicked!");
        this.model.toggle()
        console.log(this);
        console.log(this.model.get("isCompleted"));
        this.render()
        //this.model.trigger("hello")
        //this.model.trigger("change")
    },
    render: function(){
        console.log(this.model.id);
        this.$el.attr("id", this.model.id)
        console.log(this.model.get("isCompleted"));
        this.$el.toggleClass("completed", this.model.get("isCompleted"))
        var checked = this.model.get("isCompleted")?"checked":""
        this.$el.html("<input type='checkbox' id='toggle'"+ 
                        checked + "></input>" 
                        + this.model.escape("description") 
                        + "<button id='delete'>Delete</button>" )

        return this
    }
})

//id, description