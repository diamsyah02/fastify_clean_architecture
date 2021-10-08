"use strict"

const service = require('./service')

async function fetchAll(req, reply) {
  const data = await service.fetchAll()
  return reply.code(data.statusCode).send(data)
}

async function fetchDetail(req, reply) {
  const data = await service.fetchDetail(req)
  return reply.code(data.statusCode).send(data)
}

async function store(req, reply) {
  const data = await service.store(req)
  reply.code(data.statusCode).send(send)
}

async function update(req, reply) {
  const data = await service.update(req)
  reply.code(data.statusCode).send(send)
}

async function remove(req, reply) {
  const data = await service.remove(req)
  reply.code(data.statusCode).send(send)
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}