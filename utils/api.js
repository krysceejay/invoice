import axios from 'axios'

const baseUrl = process.env.BASE_URL

const api = axios.create({
    baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  res => res,
  err => {
    // if (err.response.status === 401) {
    //   store.dispatch({type: LOGOUT});
    // }
    return Promise.reject(err)
  },
)

export default api
