var User = require('../models/User')

class UserService {
  constructor() {
    this.users = [
      new User("Brad", "Francis")
    ]
  }

  getUsers() {
    return this.users
  }
  
  addUser(user) {
    this.users.push(user)
  }
}

module.exports = new UserService()
