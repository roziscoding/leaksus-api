if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI environment variable not set')

module.exports.config = {
  name: 'leaksus',
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DBNAME,
    collectionName: process.env.MONGODB_COLLECTION_NAME
  }
}
