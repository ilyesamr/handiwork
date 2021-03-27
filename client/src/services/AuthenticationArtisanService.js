import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register-artisan', credentials)
  },
  login (credentials) {
    return Api().post('login-artisan', credentials)
  }
}