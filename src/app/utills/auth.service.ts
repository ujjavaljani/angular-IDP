export class AuthService {
  loginData = null;
  isAuthenticated() {
    if (this.loginData) {
      return true;
    } else {
      return false;
    }
  }
  login(authData) {
    this.loginData = authData;
  }
}
