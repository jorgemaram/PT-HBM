require('dotenv').config()

// Database
require('./config/mongoose.config')

// Debugger
require('./config/debug.config')

// App
const express = require('express')
const app = express()

// Configs
require('./config/cors.config')(app)
require('./config/middleware.config')(app)
require('./config/passport.config')(app)


// Routes index
require('./routes')(app)

module.exports = app