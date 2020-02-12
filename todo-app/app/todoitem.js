var TodoItem = Backbone.Model.extend({
    validate: function(attributes){
        if(!attributes.description){
            return "description attribute is required!"
        }
    }
})