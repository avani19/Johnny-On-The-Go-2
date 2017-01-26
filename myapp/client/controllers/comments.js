// Template.comments.events = {
//   'click #submit' : function(event){
//     event.preventDefault();
//     var title = $('#title').val();
//     var body = $('#body').val();
//     comments.insert({
//       title: title,
//       body: body
//     });
//     $('#title, #body').val('');
//   }
// }
Template.comments.events = {
  'click #submit' : function(event){
    event.preventDefault();
    var paidOrFree = $('#paidOrFree').val();
    var timesOpen = $('#timesOpen').val();
    var publicBusiness = $('#publicBusiness').val();
    var comments = $('#comments').val();
    Markers.insert({
      paidOrFree: paidOrFree,
      timesOpen: timesOpen,
      publicBusiness: publicBusiness,
      comments: comments,
      users: {
        _id: Meteor.userId(),
        email: Meteor.user().emails[0].address
      }
    });
    $('#paidOrFree, #timesOpen, #publicBusiness, #comments').val('');
    $('#imageModal').closeModal();
  }
}