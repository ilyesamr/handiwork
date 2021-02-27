import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://inbound-shipments-back-dot-terra-incognita-dev-dtep.ey.r.appspot.com/'
    })
}