class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName || null
    this.lastName = lastName || null
    this.email = email || null
  }
}

module.exports = User