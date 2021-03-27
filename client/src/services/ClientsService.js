import Api from '@/services/Api'

export default {
  add_favorite(id_artisan, id_client) {
    return Api().post('add-favorite', {
            params: {
                'id_artisan': id_artisan,
                'id_client' : id_client
            }
        })
  },
  add_comment(id_client,name_client, id_artisan, comment) {
    return Api().post('add-comment',{
            params: {
                'id_client' : id_client,
                'name_client': name_client,
                'id_artisan': id_artisan,
                'comment': comment
            }
        })
  },
    index (client_id) {
    return Api().post('get-favorites', {
         params: {
                'client_id': client_id
            }
    })
  },
   get_comments (id_artisan) {
    return Api().post('get-comments', {
         params: {
                'id_artisan': id_artisan
            }
    })
  },
   remove_my_favorite(id_favorite){
        return Api().post('remove-favorite', {
         params: {
                'id_favorite': id_favorite
            }
    })
   }
}