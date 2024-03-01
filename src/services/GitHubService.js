import HttpService from './HttpService';

class GitHubService {
    constructor() {
        this.BASE_URL = 'https://asideas-github-cache.herokuapp.com';
    }

    getStats(owner, project) {
        return HttpService.get(this.BASE_URL + '/' + owner + '/' + project);
    }
}

export default new GitHubService();