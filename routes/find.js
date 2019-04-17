const rescue = require('express-rescue')
const { boom } = require('@expresso/errors')
const { validate } = require('@expresso/validator')
const { NoFilterError } = require('./errors/NoFilterError')

module.exports.factory = (service) => [
  validate.query({
    type: 'object',
    properties: {
      cpf: {
        type: 'string',
        maxLength: 11
      },
      name: {
        type: 'string'
      },
      city: {
        type: 'string'
      },
      state: {
        type: 'string',
        minLength: 2,
        maxLength: 2
      },
      page: {
        type: 'number',
        minimum: 1
      },
      size: {
        type: 'number',
        minimum: 1,
        maximum: 100
      }
    },
    additionalProperties: false
  }),
  rescue(async (req, res) => {
    const { cpf, name, city, state, page, size } = req.query

    const { count, total, range: { from, to }, results } = await service.find({ cpf, name, city, state }, { page, size })

    const status = total > count ? 206 : 200

    if (status === 206) res.append('x-content-range', `${from}-${to}/${total}`)

    res.status(status)
      .json(results)
  }),
  (err, _req, _res, next) => {
    if (err instanceof NoFilterError) return next(boom.badData('no filters provided', { code: 'no_filters' }))

    next(err)
  }
]
