var require = meteorInstall({"imports":{"startup":{"server":{"api.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/startup/server/api.js                                                                    //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
// nearby.setKey('AIzaSyDDAhOmFPvxXXornR_wV0MIP7nQpWGQBTI');                                        // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["./api.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/startup/server/index.js                                                                  //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
module.import('./api.js');                                                                          // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"api":{"api.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/api/api.js                                                                               //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                    // 2
                                                                                                    // 3
                                                                                                    //
Meteor.methods({                                                                                    // 5
	nearbyPlaces: function () {                                                                        // 6
		function nearbyPlaces() {                                                                         // 6
			this.unblock();                                                                                  // 7
                                                                                                    //
			try {                                                                                            // 9
				var result = HTTP.call("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
					params: {                                                                                      // 12
						location: '-33.8670522,151.1957362',                                                          // 13
						radius: '500',                                                                                // 14
						type: 'restaurant',                                                                           // 15
						keyword: 'cruise',                                                                            // 16
						key: 'AIzaSyDDAhOmFPvxXXornR_wV0MIP7nQpWGQBTI'                                                // 17
					}                                                                                              // 12
				});                                                                                             // 11
				return result;                                                                                  // 20
			} catch (e) {                                                                                    // 21
				return false;                                                                                   // 22
			}                                                                                                // 23
		}                                                                                                 // 24
                                                                                                    //
		return nearbyPlaces;                                                                              // 6
	}()                                                                                                // 6
});                                                                                                 // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./api.js","./marker.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/api/index.js                                                                             //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
module.import('./api.js');module.import('./marker.js');                                             // 1
                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////

}],"marker.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/api/marker.js                                                                            //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
module.export({Markers:function(){return Markers}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                    // 2
                                                                                                    // 3
                                                                                                    //
var Markers = new Mongo.Collection('markers');                                                      // 5
                                                                                                    //
if (Meteor.isServer) {                                                                              // 7
	Meteor.publish('markers', function () {                                                            // 8
		function markersPublication() {                                                                   // 8
			return Markers.find();                                                                           // 9
		}                                                                                                 // 10
                                                                                                    //
		return markersPublication;                                                                        // 8
	}());                                                                                              // 8
}                                                                                                   // 11
                                                                                                    //
Markers.allow({                                                                                     // 13
	insert: function () {                                                                              // 14
		function insert(userId, doc) {                                                                    // 14
			return userId && doc.owner === userId;                                                           // 15
		}                                                                                                 // 16
                                                                                                    //
		return insert;                                                                                    // 14
	}(),                                                                                               // 14
	update: function () {                                                                              // 17
		function update(userId, doc, fields, modifier) {                                                  // 17
			return doc.owner === userId;                                                                     // 18
		}                                                                                                 // 19
                                                                                                    //
		return update;                                                                                    // 17
	}(),                                                                                               // 17
	remove: function () {                                                                              // 20
		function remove(userId, doc) {                                                                    // 20
			return doc.owner === userId;                                                                     // 21
		}                                                                                                 // 22
                                                                                                    //
		return remove;                                                                                    // 20
	}(),                                                                                               // 20
	fetch: ['owner']                                                                                   // 23
});                                                                                                 // 13
                                                                                                    //
Markers.deny({                                                                                      // 26
	update: function () {                                                                              // 27
		function update(userId, doc, fields, modifier) {                                                  // 27
			return _.contains(fields, 'owner');                                                              // 28
		}                                                                                                 // 29
                                                                                                    //
		return update;                                                                                    // 27
	}(),                                                                                               // 27
	remove: function () {                                                                              // 30
		function remove(userId, doc) {                                                                    // 30
			return doc.locked;                                                                               // 31
		}                                                                                                 // 32
                                                                                                    //
		return remove;                                                                                    // 30
	}(),                                                                                               // 30
	fetch: ['locked']                                                                                  // 33
});                                                                                                 // 26
//////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"server.js":["../imports/startup/server/index.js","../imports/api/index.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// server/server.js                                                                                 //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
module.import('../imports/startup/server/index.js');module.import('../imports/api/index.js');       // 1
                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/server.js");
//# sourceMappingURL=app.js.map
