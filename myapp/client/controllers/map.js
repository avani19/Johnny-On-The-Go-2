
// Template.map.helpers({  
//   mapOptions: function() {
//     if (GoogleMaps.loaded()) {
//       return {
//         center: new google.maps.LatLng(-37.8136, 144.9631),
//         zoom: 8
//       };
//     }
//   }
// });
// Template.map.helpers({  
//   geolocationError: function() {
//     var error = Geolocation.error();
//     return error && error.message;
//   },
//   mapOptions: function() {
//     var latLng = Geolocation.latLng();
//     // Initialize the map once we have the latLng.
//     if (GoogleMaps.loaded() && latLng) {
//       return {
//         center: new google.maps.LatLng(latLng.lat, latLng.lng),
//         zoom: MAP_ZOOM
//       };
//     }
//   }
// });
if (Meteor.isClient) {
  var MAP_ZOOM = 15;

  Meteor.startup(function() {
    GoogleMaps.load({key: "AIzaSyAm5g1m-LfYFn6tCoxvwjYBDjgVN2dTTAo"});
  });
  
//   GoogleMaps.create({
//   name: 'exampleMap',
//   element: document.getElementById('exampleMap'),
//   options: {
//     center: new google.maps.LatLng(-37.8136, 144.9631),
//     zoom: 8
//   }
// });

  Template.map.onCreated(function() {
    var self = this;

    GoogleMaps.ready('map', function(map) {
      var marker;

      // Create and move the marker when latLng changes.
      self.autorun(function() {
        var latLng = Geolocation.latLng();
        if (! latLng)
          return;

        // If the marker doesn't yet exist, create it.
        if (! marker) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(latLng.lat, latLng.lng),
            map: map.instance
          });
        }
        // The marker already exists, so we'll just change its position.
        else {
          marker.setPosition(latLng);
        }

        // Center and zoom the map view onto the current position.
        map.instance.setCenter(marker.getPosition());
        map.instance.setZoom(MAP_ZOOM);
      });
    });
  });

  Template.map.helpers({
    geolocationError: function() {
      var error = Geolocation.error();
      return error && error.message;
    },
    mapOptions: function() {
      var latLng = Geolocation.latLng();
      // Initialize the map once we have the latLng.
      if (GoogleMaps.loaded() && latLng) {
        return {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  });
}