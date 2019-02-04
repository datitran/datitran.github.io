import projectData from '../data/projects'

class ProjectService {
    getProjects() {
        return projectData;
    }
}

export default new ProjectService();
