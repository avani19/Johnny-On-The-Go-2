import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.startup(function() {
  GoogleMaps.load( { v: '3', key: 'AIzaSyBOQkp0aCa4h0jQLiyfauUxcQEZ0ErxAho', libraries: 'geometry,places'});
});
