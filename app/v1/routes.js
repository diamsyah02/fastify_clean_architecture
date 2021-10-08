"use strict"

const response = require('../../helpers/WebResponse')
const AuthRoute = require('./modules/auth/routes')
const PegawaiRoute = require('./modules/pegawai/routes')

async function RouteV1(app) {
  await app.route({
    method: 'GET',
    url: '/',
    handler: function (request, reply) {
      reply.send(response(200, 'Clean Architecture Fastify JS', null))
    }
  })
  await AuthRoute(app)
  await PegawaiRoute(app)
}

module.exports = RouteV1