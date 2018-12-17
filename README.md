# burger-logger

This app is built using, NodeJS, Handlebars, MySQL. The app is hosted on heroku (https://salty-refuge-36564.herokuapp.com/burgers)

When going to the app, either on Heroku on localhost. The user is presented with burgers waiting to be devoured (assuming the seed file was used to insert into the burgers table).

When a user enters a burger name, it is added to the burgers table in MySQL. If the user clicks on the devour button for an existing burger then it is moved `Burgers That Are Devoured` section. This is stored as `1` for the `devoured` column within the `burgers` table. 

The model for the app can be found in the `models/burger.js`.

`config/orm.js` file contains the structure for MySQL.

`burgers_controllers.js` contains all the API routes needed for this app.



