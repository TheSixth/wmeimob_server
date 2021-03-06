const index = require('./index')
const users = require('./users')
const article = require('./article')

module.exports = (app) => {
  app.use(index.routes(), index.allowedMethods())
  app.use(users.routes(), users.allowedMethods())
  app.use(article.routes(), article.allowedMethods())
}
