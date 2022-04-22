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
    Projects.createProject(req.body)
        .then(project => {
            console.log(project)
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'could not post new project'
            })
        })
})


module.exports = router