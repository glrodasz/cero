const SERVER_URL = "http://localhost:3001";

class Request {
  constructor(resource) {
    this.resource = resource
  }

  request(resource = this.resource, options) {
    return fetch(`${SERVER_URL}/${resource}`, options).then(data => data.json())
  }
}

export default Request;
