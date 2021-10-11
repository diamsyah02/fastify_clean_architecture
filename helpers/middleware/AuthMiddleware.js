"use strict"

const jwt = require('jsonwebtoken')
const response = require('../WebResponse')
require('dotenv').config()

async function AuthMiddleware(req, reply, done){
    const token = (req.headers['authorization'] != undefined) ? req.headers['authorization'].substr(7) : null
    if(token){
        jwt.verify(token, process.env.KEY, (err, decoded) => {
            if(err){
                return reply.code(401).send(response(401, 'Token is not valid !', null))
            }else{
                return true
            }
        })
    }else{
        return reply.code(401).send(response(401, 'Token is not supplied !', null))
    }
}

module.exports = AuthMiddleware