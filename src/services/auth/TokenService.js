class TokenService {
  setAuth(key) {
    sessionStorage.setItem('auth', key);
  }
  getAuth() {
    sessionStorage.getItem('auth');
  }
  removeAuth() {
    sessionStorage.removeItem('auth');
  }
}
export default new TokenService();