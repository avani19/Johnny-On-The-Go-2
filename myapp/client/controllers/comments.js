Template.comments.events = ({
  "click #newPost" : function(event){
    event.preventDefault();

    MeteorCamera.getPicutres(function (err, data) {
      if (!err) {
        Meteor.call("addPost", data);
      }
    });

    return false;
  }
});
