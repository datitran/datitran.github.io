import HttpService from './HttpService';

class GitHubService {
    constructor() {
        this.BASE_URL = 'https://api.github.com/repos';
    }

    getStats(owner, project) {
        const url = `${this.BASE_URL}/${owner}/${project}`;
        return HttpService.get(url, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });
    }
}

export default new GitHubService();