// build your `/api/projects` router here
const express = require('express')
// const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    //Example of response body: 
    // [{ "project_id":1, "project_name":"bar", "project_description":null, "project_completed":false }]
})

router.post('/', (req, res, next) => {
    
})


module.exports = router