// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })    
        .catch(next)
})

router.post('/', (req, res, next) => {
    // Example of response body: 
    // { "resource_id":1, "resource_name":"foo", "resource_description":null }
    res.send('POST resources')
})


module.exports = router