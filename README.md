# Johnny-On-The-Go-2
Final Project

For admin
Visit http://localhost:3000/usermgmt in your browser. You should get kicked back to the index because of the Role protection in the routes onBeforeAction. The route is missing a template or two, but lets get in to see the error first.

While logged in, paste the following into your console in chrome:

Meteor.userId();
Put the ID somewhere for a moment. Meteor will likely refresh your console so save it in an empty document.

In the root of your project, create a new file called settings.json. Put this in that file:

{
  "adminId": "<THE ID YOU JUST GOT FROM THE CHROME CONSOLE>"
}
Go to the terminal, and stop the meteor server with ctrl+c.

We're going to restart it with our settings file and take care of creating our first admin user -- Us.

Use the following command to start meteor:

meteor run --settings settings.json
