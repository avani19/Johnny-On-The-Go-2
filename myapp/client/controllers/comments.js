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
        _id: Meteor.user().id,
        email: Meteor.user().emails[0].address
      }
    });
    $('#paidOrFree, #timesOpen, #publicBusiness, #comments').val('');
    imageModal.hide('imageModal');
  }
}
