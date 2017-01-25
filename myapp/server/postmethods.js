Meteor.methods({
  addPost: function (data) {
    Posts.insert({
      title: title,
      body: body,
      createdAt: new Date().toLocaleString(),
      likes: 0,
      user: {
        _id: Meteor.user()._id,
        email: Meteor.user().emails[0].address
      }
    });
  }
});
