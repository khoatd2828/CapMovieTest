import { apiInstance } from 'constant'
import { LoginType, RegisterType } from 'schema'

const api = apiInstance.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung'
})

export const qlNguoiDungServices = {
    dangKy: (payload: RegisterType) => {
        api.post('/DangKy', payload)
    },

    dangNhap: (payload: LoginType) => {
        api.post<HttpResponse<{email: string}>>('/DangNhap', payload)
        return api
    }
}