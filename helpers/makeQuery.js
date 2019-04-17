module.exports.makeQuery = ({ cpf, name, city, state }) => {
  const query = {}
  if (cpf) query.cpf = parseInt(cpf, 10)
  if (name) query.name = new RegExp(name, 'ig')
  if (city) query.city = new RegExp(city, 'ig')
  if (state) query.state = new RegExp(state, 'ig')
  return query
}
