Meteor.startup(function() {  
  GoogleMaps.load();
});
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
