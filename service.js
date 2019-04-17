module.exports.getService = (repository) => ({
  find: async (filters, pagination) => {
    return repository.find(filters, pagination)
  }
})
