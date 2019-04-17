const { app } = require('./app')
const { config } = require('./config')
const server = require('@expresso/server')

server.start(app, config)
