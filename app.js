const { routes } = require('./routes')
const errors = require('@expresso/errors')
const { getService } = require('./service')
const expresso = require('@expresso/app')
const { createConnection } = require('./db')
const { getRepository } = require('./repository')

const app = expresso.app(async (app, config, environment) => {
  const mongodbConnection = await createConnection(config.mongodb)
  const repository = getRepository(mongodbConnection, config.mongodb)
  const service = getService(repository)

  app.get('/', routes.find.factory(service))
  app.use(errors.factory(environment))
})

module.exports = { app }
