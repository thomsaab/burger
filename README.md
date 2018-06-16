🍔 Eat Da Burger!
------------------

**Overview**

This app is made with Node.js, Express.js, Handlebars and MySQL. Type in a burger name to save it to the database and devoured by pressing on the Gene Belcher button. Once created your burger will show up on the right and once eaten it goes under the devoured section. Press the Bob Belcher button to delete the burger.

[Please check out the launched app on Heroku here!](https://serene-ravine-97137.herokuapp.com/)

**Technologies used:**

* Node.js
* Express.js & Handlebars
* MySQL

**Functionality**

Using a custom ORM, the app uses 4 basic CRUD functions.

READ: Reads the data from MySQL and displays the burger on the screen.

UPDATE: Allows users to change a boolean value of the burger to move the burger from right to left(Newly created burger defaults to false for devoured value. Click on Gene to change from false to true.)

CREATE: Create a burger and store it in the database with and incrementing ID.

Delete: Click on Bob Burger to delete the Burger from the screen.

