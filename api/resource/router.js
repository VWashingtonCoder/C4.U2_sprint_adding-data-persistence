// build your `/api/resources` router here
// build your `/api/projects` router here
const express = require('express')
// const Resources = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    // Example of response body: 
    // [{ "resource_id":1, "resource_name":"foo","resource_description":null }]
    res.send('GET resources')
})

router.post('/', (req, res, next) => {
    // Example of response body: 
    // { "resource_id":1, "resource_name":"foo", "resource_description":null }
    res.send('POST resources')
})


module.exports = router