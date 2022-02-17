export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    return /^[a-zA-Z\-_0-9]+$/.test(this.username)
        && /^[^\d\-_]+/.test(this.username)
        && /[^\d\-_]$/.test(this.username)
        && !/\d{4,}/.test(this.username);
  }
}
