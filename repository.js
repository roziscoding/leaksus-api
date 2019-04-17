const { makeQuery } = require('./helpers/makeQuery')

module.exports.getRepository = (connection, { collectionName }) => {
  const collection = connection.collection(collectionName)

  return {
    find: async (filters, { page = 1, size = 20 }) => {
      const query = makeQuery(filters)

      const cursor = collection.find(query)

      const total = await cursor.count()

      const results = await cursor
        .limit(size)
        .skip((page - 1) * size)
        .toArray()

      const count = results.length

      const from = (page - 1) * size
      const to = from + count

      return { count, total, range: { from, to }, results }
    }
  }
}
