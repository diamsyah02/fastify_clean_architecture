"use strict"

const controller = require('./controller')

async function AuthRoute(app) {
  await app.route({
    method: 'POST',
    url: '/register',
    handler: await controller.register
  })

  await app.route({
    method: 'POST',
    url: '/login',
    handler: await controller.login
  })
}

module.exports = AuthRoute