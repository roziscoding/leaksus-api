const { MongoClient } = require('mongodb')

module.exports.createConnection = async ({ uri, dbName = 'sus' }) => {
  const connection = await MongoClient.connect(uri, { useNewUrlParser: true, poolSize: 10 })
  return connection.db(dbName)
}
