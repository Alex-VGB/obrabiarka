import axios from 'axios'

const api = axios.create({ baseURL: 'https://limitless-reaches-05484.herokuapp.com/api' })

export default api