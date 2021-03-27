import Api from '@/services/Api'

export default {
  index() {
    return Api().get('get-artisans')
  },
  reserve(reservation) {
    return Api().post('reserve-artisan', reservation)
  },
  show_for_clients(client_id) {
    return Api().get('get-offers-clients', client_id)
  },
  show_for_artisans(artisan_id) {
    return Api().post('get-offers-artisans', artisan_id)
  },
  get_messages(artisan_id) {
    return Api().post('get-messages-artisans', {
            params: {
                'id_artisan' : artisan_id,
            }
        })
  }
}