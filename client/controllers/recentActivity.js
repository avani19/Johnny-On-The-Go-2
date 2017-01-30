Template.recentActivity.helpers({
  getRecentActivity : function() {
    Markers.comments.find({}).fetch()
  }
});
