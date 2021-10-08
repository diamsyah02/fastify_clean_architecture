"use strict"

const response = require('../../../../helpers/WebResponse')
const repo = require('./repository')

async function fetchAll() {
  const data = await repo.fetchAll()
  return response(200, 'Get data pegawai successfully', data)
}

async function fetchDetail(req) {
  const data = await repo.fetchDetail(req)
  return response(200, `Get data pegawai with id = ${req.params.id} successfully`, data[0])
}

async function store(req) {
  const data = await repo.store(req)
  return response(200, 'Insert data pegawai successfully', data)
}

async function update(req) {
  const data = await repo.update(req)
  return response(200, `Update data pegawai with id = ${req.params.id}`, data)
}

async function remove(req) {
  const data = await repo.remove(req)
  return response(200, `Delete data pegawai with id = ${req.params.id}`, data)
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}