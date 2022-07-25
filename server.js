//Required Packages
const express = require('express');
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const session = require('express-session');

//Sequelize and Session-Sequelize Package
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Initializing app setting it equal to Express method. 
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });