// Template.mapForm.events({
//   'submit #mapForm': function(event){
//     event.preventDefault();
//     console.log("User Position is Stored as: "+JSON.stringify(Session.get('position')));
//     var position = Session.get('position');
//     Markers.insert({
//       lat: position.lat,
//       lng: position.lng,
//       image: './marker.png',
//     });
//   }
// });
Template.mapForm.events({
  'submit #mapForm': function(event){
    event.preventDefault();
    console.log("User Position is Stored as: "+JSON.stringify(Session.get('position')));
    var position = Session.get('position');
    Markers.insert({
      lat: position.lat,
      lng: position.lng,
      image: './marker.png',
      // paidOrFree: paidOrFree,
      // timesOpen: timesOpen,
      // publicBusiness: publicBusiness,
      // comments: comments

    });
  }
});