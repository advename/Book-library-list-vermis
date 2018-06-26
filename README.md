# Book Library List - Vermis
An online list of all books available at a Library, with fully admin auth. Written with NodeJS, Express, MongoDB and static HTML, CSS, JS.
Vermis is latin and stands for (book) worm - so i gave this project the name vermis.

Setup:
The /public folder contains the front-end js files handling FETCH API requests to the backend, the HTML pages, CSS styles. The /public/admin folder is protected by the backend and can only be accessed if the client has a valid session, either as a cookie in the browser or stored in MongoDB.

The /models folder holds the models and schemes of the books and the user used for mongodb.

The /routes folder holds the NodeJS routes handling GET, POST, DELETE requests for the books. POST and DELETE are only available if the user has a valid session. It also holds the NodeJS routes handling /login, /logout and /register.

The /test folder holds the book-test.js which empties the database, checks the lenght of items = 0 and adds a new item and checks the title of this item. Using "npm run test" uses the  "mongodb://localhost/vermis-test" location. So we are not touching the  "mongodb://localhost/vermis-prod" or  "mongodb://localhost/vermis-dev" environment during a test.

The config folder contains the .json files with the location to the MongoDB database. These .json files are either called "dev-environment.json", "prod-environment.json" and "test-environment.json" and are loaded to use the location of mongodb based on their environment.

The /config folder also contains the keys.json file, where all keys should be stored and imported to the rest of NodeJS.

The server.js is our main application running and handling all previous mentioned files.

The whole project depends on all following packages:

Core:
    express: 4.16.3,
    express-session: 1.15.6,
    mongoose: 5.1.6,
    body-parser: 1.18.3,
    connect-mongo: 2.0.1,
    bcrypt: 2.0.1,
    helmet: 3.12.1 

Environment:
    config: 1.30.0,
    cross-env: 5.2.0,

Test:
    morgan: 1.9.0
    mocha: 5.2.0,
    chai: 4.1.2,
    chai-http: 4.0.0,
