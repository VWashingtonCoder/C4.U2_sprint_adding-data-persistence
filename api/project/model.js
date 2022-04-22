// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects(){
    const projectsResults = await db('projects')

    if(projectsResults.length === 0){
        return []
    }

    const projects = []

    for(let project of projectsResults){
        const proj = project
        projects.push({
            project_id: proj.project_id,
            project_name: proj.project_name,
            project_description: proj.project_description,
            project_completed: 
                proj.project_completed === 0 
                    ? false : proj.project_completed
        })
    }

    return projects
}

async function createProject(project){
    const [project_id] = await db('projects').insert(project)

}

module.exports = {
    getProjects,
    createProject
} 