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

  await app.route({
    method: 'POST',
    url: '/pegawai',
    preHandler: await AuthMiddleware,
    handler: await controller.store
  })

  await app.route({
    method: 'POST',
    url: '/pegawai/:id',
    preHandler: await AuthMiddleware,
    handler: await controller.update
  })

  await app.route({
    method: 'GET',
    url: '/pegawai/:id/delete',
    preHandler: await AuthMiddleware,
    handler: await controller.remove
  })
}

module.exports = PegawaiRoute