"use strict"

const db = require('../../../../configs/db')
const table = 'pegawai'

async function fetchAll() {
  const data = await db.select().table(table)
  return data
}

async function fetchDetail(req) {
  const { id } = req.params
  const data = await db(table).where('id', id)
  return data
}

async function store(req) {
  const { nama, alamat, telepon } = req.body
  const store = await db(table).insert({nama: nama, alamat: alamat, telepon: telepon})
  return store
}

async function update(req) {
  const { nama, alamat, telepon } = req.body
  const { id } = req.params
  const update = await db(table).where('id', id).update({nama: nama, alamat: alamat, telepon: telepon})
  return update
}

async function remove(req) {
  const { id } = req.params
  const remove = await db(table).where('id', id).del()
  return remove
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}