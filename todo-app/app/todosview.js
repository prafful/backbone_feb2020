var TodoItemsView = Backbone.View.extend({
    tagName:"ul",
    id:"todoitems",
    initialize: function(options){
        console.log(options);
        if(!options && options.model){
            throw new Error("collection model is not present!")
        }
    },
    render: function(){
        var self = this
        this.model.each(function(todoItem){
            var view = new TodoItemView({model: todoItem})
            self.$el.append(view.render().$el)
        })
        return this
    }
})