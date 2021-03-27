import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register-client', credentials)
  },
  login (credentials) {
    return Api().post('login-client', credentials)
  }
}