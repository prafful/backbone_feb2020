var TodoItem = Backbone.Model.extend({
    defaults:{
        isCompleted: false
    },
    url:"anyurl",
    validate: function(attributes){
        if(!attributes.description){
            return "description attribute is required!"
        }
    },
    toggle: function(){
        if(this.get("isCompleted")){
            this.set("isCompleted", false)
        }else{
            this.set("isCompleted", true)
        }
    }
})