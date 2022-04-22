// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Could not get projects'})
        })
})

router.post('/', (req, res, next) => {
    // Example of response body: 
    // { "project_id":1,"project_name":"bar","project_description":null,"project_completed":false }
    res.send('Post Projects')
})


module.exports = router