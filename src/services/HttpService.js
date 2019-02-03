import 'whatwg-fetch';

class HttpService {
    constructor() {

    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    }

    parseJSON(response) {
        console.log(response);
        return response.json();
    }

    get(url) {
        return fetch(url)
            .then(this.checkStatus)
            .then(this.parseJSON);
    }
}

export default new HttpService();