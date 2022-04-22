// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks(){
    let tasksResults = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
    
    if(tasksResults.length === 0){
        return []
    }
    
    const tasks = []

    for(let task of tasksResults){
        const t = task

        tasks.push({
            task_id: t.task_id, 
            task_description: t.task_description, 
            task_notes: t.task_notes, 
            task_completed: t.task_completed === 0 ? false : true, 
            project_name:t.project_name, 
            project_description: t.project_description
        })
    }
    
    
    return tasks
} 

module.exports = { getTasks }
