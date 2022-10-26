import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ohnae3.cafe24.com/api/controller/',
  headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  },
});

export default instance;