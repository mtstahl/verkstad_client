import Api from './Api';

export default {
  signUp(credentials) {
    return Api().post('/signup', credentials);
  },
  login(credentials) {
    return Api().post('/login', credentials);
  },
};
