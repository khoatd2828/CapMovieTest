import { z } from "zod";

export const RegisterSchema = z.object({
    hoTen: z.string({required_error: 'Vui lòng nhập họ tên'}).min(1).max(20, 'Họ tên chỉ tối đa 20 ký tự'),
    taiKhoan: z.string({required_error: 'Vui lòng nhập tài khoản'}).min(1).max(16, 'Tài khoản chỉ tối đa 16 ký tự'),
    matKhau: z.string({required_error: 'Vui lòng nhập mật khẩu'}).min(6, 'Mật khẩu tối thiểu 6 ký tự'),
    email: z.string({required_error: 'Vui lòng nhập email'}).email('Vui lòng nhập đúng định dạng email'),
    soDt: z.string({required_error: 'Vui lòng nhập số điện thoại'}).min(1),
    maNhom: z.string({required_error: 'Vui lòng nhập mã nhóm'}).min(1),
})

export type RegisterType = z.infer<typeof RegisterSchema>  
