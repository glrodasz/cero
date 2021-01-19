const SERVER_URL = 'http://localhost:3001'

class Request {
  constructor(resource) {
    this.resource = resource
  }

  request(resource = this.resource, options = {}) {
    const method = options.method ? options.method.toUpperCase() : 'GET'
    const requestOptions = { ...options, method }

    requestOptions.headers = new Headers({
      'Content-Type': 'application/json',
      ...options.headers,
    })

    if (options.body) {
      requestOptions.body = JSON.stringify(options.body)
    }

    return fetch(`${SERVER_URL}/${resource}`, requestOptions).then((data) =>
      data.json()
    )
  }
}

export default Request
