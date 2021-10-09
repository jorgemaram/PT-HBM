const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
// const express = require('express')
// const { join } = require('path')

module.exports = app => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
}