var TodoItemView = Backbone.View.extend({
    tagName:"li",
    intialize: function(options){
        if(!options && options.model){
            throw new Error("model is not present!")
        }

    },
    render: function(){
        this.$el.html(this.model.get("description"))

        return this
    }
})

//id, description