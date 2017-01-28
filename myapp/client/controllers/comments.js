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
    var newComment = {
      comments : comments,
      users : {
        _id: Meteor.userId(),
        email: Meteor.user().emails[0].address
      }
    };
    var targetMarkerId = $('.markerCard')
      console.log(targetMarkerId)

    /* use jQuery to grab markerId from form */
    // var newComment = {
    //    "text": grab text balue
    //    "userEmail" grab from Meteor.user().emails?
    // }
    // assuming a marker exists I want to update the existing marker with new comments
    // Markers.findOne(_id: /*grab from template or maybe from DOM)
    //  .then(function(marker){
    //    Markers.update($push: comments: newComment )
    //||  Markers.update(comments: $push: // I can't remember syntax check mongodocs for find and update or upsert
    // })
    Markers.findOne(_id: targetMarkerId)
      .then(function(Markers){
        Markers.findOneAndUpdate({
          comments: newComment
        })
        Markers.findOneAndUpdate({
          comments: comments
        });
    });

    Markers.insert({
      paidOrFree: paidOrFree,
      timesOpen: timesOpen,
      publicBusiness: publicBusiness,
      users: {
        _id: Meteor.userId(),
        email: Meteor.user().emails[0].address
      }
    });
    $('#paidOrFree, #timesOpen, #publicBusiness, #comments').val('');
    $('#imageModal').closeModal();
  }
}