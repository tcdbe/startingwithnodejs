const express = require('express')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const routes = require('./routes');


let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())
app.use(expressValidator())

//  Connect all routes to the application
app.use('/', routes);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});