module.exports = app => {

    // Base URLS
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/products', require('./products.routes.js'))
    app.use('/api/user', require('./user.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
}