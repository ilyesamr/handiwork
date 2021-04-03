import axios from 'axios'

export default () => {
 if (process.env.NODE_ENV === 'production') {
        return axios.create({
            baseURL: 'https://handi-backend.herokuapp.com/'
        })
    } else if (process.env.NODE_ENV === 'development') {
        return axios.create({
            baseURL: 'http://localhost:8081/'
        })
    }
}