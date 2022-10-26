import AuthService from '@/services/auth/AuthService';

const initialState = sessionStorage.getItem('auth') ? { active: true } : { active: false } ;

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, param) {
      return AuthService.login(param).then(
        param => {
          commit('loginSuccess', param);
          return Promise.resolve(param);
        },
        error => {
          commit('loginFail');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
  },
  mutations: {
    loginSuccess(state, resp) {
      state = {
        active: true,
        id: resp.id
      }
    },
    loginFail(state) {
      state = {
        active: false
      }
    },
    logout(state) {
      state = {
        active: false
      }
    },
  }
};