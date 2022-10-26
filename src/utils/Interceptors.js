import api from "@/utils/ApiHeaders";

// import TokenService from './TokenService';

const setup = (store) => {
  api.interceptors.request.use(
    (config) => {
      // config.withCredentials = true;
      config.data = {
        ...config.data,
        'auth' : sessionStorage.getItem('auth') // TokenService.getAuth()
      }
      //console.log(config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  api.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      //console.log(err);
      return Promise.reject(err);
    }
  );
};
export default setup;