Template.profile.helpers({
  // check if user is an admin
  'post': function() {
    return Posts.find();
  }
});
