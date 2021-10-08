"use strict"

require('dotenv').config()
const cors = require('fastify-cors')
const formbody = require('fastify-formbody')
const routesV1 = require('./app/v1/routes')
const fastify = require('fastify')({logger: true})

fastify.register(cors)
fastify.register(formbody)
fastify.register(routesV1, { prefix: '/api/v1' })
const start = async () => {
    try {
        await fastify.listen(process.env.APP_PORT || 2500)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()