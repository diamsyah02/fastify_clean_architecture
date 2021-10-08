"use strict"

const AuthMiddleware = require('../../../../helpers/middleware/AuthMiddleware')
const controller = require('./controller')

async function PegawaiRoute(app) {
  await app.route({
    method: 'GET',
    url: '/pegawai',
    preHandler: await AuthMiddleware,
    handler: await controller.fetchAll
  })

  await app.route({
    method: 'GET',
    url: '/pegawai/:id',
    preHandler: await AuthMiddleware,
    handler: await controller.fetchDetail
  })
}

module.exports = PegawaiRoute