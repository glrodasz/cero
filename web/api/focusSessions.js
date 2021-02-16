import Request from './request'

class FocusSession extends Request {
  create() {
    return this.request('focus-sessions', {
      method: 'post',
      body: { text: 'yay' },
    })
  }
}

export default FocusSession
