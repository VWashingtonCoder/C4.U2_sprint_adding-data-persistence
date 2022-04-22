// build your `/api/tasks` router here
const express = require('express')
// const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    // Example of response body: 
    // [{ "task_id":1, "task_description":"baz", "task_notes":null, "task_completed":false, "project_name:"bar", "project_description":null }]
    res.send('GET tasks')
})

router.post('/', (req, res, next) => {
    // Example of response body: 
    // { "task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1 }
    res.send('POST tasks')
})


module.exports = router