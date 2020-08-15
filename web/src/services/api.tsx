import axios, { AxiosRequestConfig } from 'axios'
import { getToken } from './isAuthenticated'

const api = axios.create({ baseURL: 'http://localhost:8080' })

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const token = getToken()
    if (token) {
        config.headers.common['x-access-token'] = `${token}`;
    }
    return config
})

export default api