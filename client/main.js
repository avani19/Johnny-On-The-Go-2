import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import './main.html';

Meteor.startup(function() {
  GoogleMaps.load( { v: '3', key: 'AIzaSyDcwH9pW1RsFCRy50OpynEc_YyhPg7icZ0', libraries: 'geometry,places'});
});
