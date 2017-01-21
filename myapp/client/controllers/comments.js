Template.comments.events = {
  'click #submit' : function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    comments.insert({
      title: title,
      body: body
    });
    $('#title, #body').val('');
  }
}
