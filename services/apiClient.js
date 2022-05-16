import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

// AUTH
export const SendOtp = (data) => api.post('/api/send-otp', data)
export const VerifyOtp = (data) => api.post('/api/verify-otp', data)
export const logout = () => api.post('/api/logout')

// UPDATE
export const UpdateBusinessDetails = (data) => api.post('/api/update-business-details', data)
export const UpdateThemeDetails = (data) => api.post('/api/update-theme-details', data)
export const AddCategory = (data) => api.post('/api/add-category', data)
export const AddProductData = (data) => api.post('/api/add-product', data)
export const GetAllProducts = () => api.get('/api/get-all-product')
export const GetAllOrders = () => api.get('/api/get-all-orders')
export const GetAllUsers = () => api.get('/api/get-all-users')
export const GetOrderDetail = (data) => api.post('/api/get-order-detail', data)

api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        try {
            await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/refresh`, {
                withCredentials: true
            })
            return api.request(originalRequest)
        } catch (err) {
            console.log(err)
        }
    }
    throw error
})

export default api