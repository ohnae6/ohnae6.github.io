import api from "@/utils/ApiHeaders";
import apiUrl from "@/utils/ApiUrl";
import TokenService from './TokenService';

class AuthService {
  async login({ id, password }) {
    const res = await api.post(apiUrl.auth.getLogin, {
        id,
        password
      });
    if (res.data.auth) {
      TokenService.setAuth(res.data.auth);
    }
    return res.data;
  }
  logout() {
    TokenService.removeAuth();
  }
}

export default new AuthService();