$(function(){
  
  var ItemView = Backbone.View.extend({
    render : function(){
      var t = $("#foo-template").html()
      this.$el.html(t)
      return this
    }
  })
  var AppView = Backbone.View.extend({
    el: $("#container"),
    render : function(){
      var itemView  = new ItemView();
      
      this.$el.append(itemView.render().el)
    },
  })
  var app = new AppView();
  app.render()
})
