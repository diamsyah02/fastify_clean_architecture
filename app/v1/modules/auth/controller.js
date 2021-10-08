"use strict"

const service = require('./service')

async function register(req, reply) {
  const data = await service.register(req)
  return reply.code(data.statusCode).send(data)
}

async function login(req, reply) {
  const data = await service.login(req)
  return reply.code(data.statusCode).send(data)
}

module.exports = {
  register,
  login
}