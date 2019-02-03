import projectData from '../data/projects'

class ProjectService {
    constructor() {

    }

    getProjects() {
        return projectData;
    }
}

export default new ProjectService();