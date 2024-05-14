import { Button, Input } from 'antd'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, RegisterType } from 'schema'
import { qlNguoiDungServices } from 'services'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'constant'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { quanLyNguoiDungActionsThunks } from 'store/quanLyNguoiDung'
import { UnknownAction } from '@reduxjs/toolkit'
import { RootState, useAppDispatch } from 'store'

export const RegisterTemplate = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isFetchingRegister } = useSelector((state: RootState) => state.quanLyNguoiDung)
  console.log(isFetchingRegister)
  const {handleSubmit,
        control,
        formState: {errors},
        } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
  })
  // const onsubmit: SubmitHandler<RegisterType> = async (values) => {
  //   try {
  //     await qlNguoiDungServices.dangKy(values)
  //     // hien thi toast thong bao dang nhap thanh cong
  //     toast.success('Đăng ký tài khoản thành công')
  //     // redirect ve trang dang nhap
  //     navigate(PATH.dangNhap)
  //   } catch (error: any) {
  //      
  //   }
  // }
  const onsubmit : SubmitHandler<RegisterType> = (values) => {
    dispatch(quanLyNguoiDungActionsThunks.registerThunk(values)).unwrap().then(() => {
      // hien thi toast thong bao dang nhap thanh cong
      toast.success('Đăng ký tài khoản thành công')
      // redirect ve trang dang nhap
      navigate(PATH.dangNhap)
    })
    .catch((error) => {
      toast.error(error?.response?.data?.content)
    })
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <h1 className='text-white text-[30px] font-[600] mb-[30px]'>Đăng ký</h1>
      <div className='text-white mb-4'>Họ tên</div>
      <Controller 
        control = {control}
        name = "hoTen"
        render = {({field}) => <Input {...field} placeholder='Họ tên'></Input>}
      />
      {errors.hoTen && <p className='text-red-500 text-[12px]'>{errors.hoTen?.message}</p>}
      <div className='text-white mb-4 mt-10'>Tài khoản</div>
      <Controller 
        control = {control}
        name = "taiKhoan"
        render = {({field}) => <Input {...field} placeholder='Tài khoản'></Input>}
      />
      {errors.taiKhoan && <p className='text-red-500 text-[12px]'>{errors.taiKhoan?.message}</p>}
      <div className='text-white mb-4 mt-10'>Mật Khẩu</div>
      <Controller 
        control = {control}
        name = "matKhau"
        render = {({field}) => <Input.Password {...field} placeholder='Mật Khẩu'></Input.Password>}
      />
      {errors.matKhau && <p className='text-red-500 text-[12px]'>{errors.matKhau?.message}</p>}
      <div className='text-white mb-4 mt-10'>Email</div>
      <Controller 
        control = {control}
        name = "email"
        render = {({field}) => <Input {...field} placeholder='Email'></Input>}
      />
      {errors.email && <p className='text-red-500 text-[12px]'>{errors.email?.message}</p>}
      <div className='text-white mb-4 mt-10'>Số điện thoại</div>
      <Controller 
        control = {control}
        name = "soDt"
        render = {({field}) => <Input {...field} placeholder='Số điện thoại'></Input>}
      />
      {errors.soDt && <p className='text-red-500 text-[12px]'>{errors.soDt?.message}</p>}
      <div className='text-white mb-4 mt-10'>Mã nhóm</div>
      <Controller 
        control = {control}
        name = "maNhom"
        render = {({field}) => <Input {...field} placeholder='Mã nhóm'></Input>}
      />
      {errors.maNhom && <p className='text-red-500 text-[12px]'>{errors.maNhom?.message}</p>}
      <Button htmlType='submit' size='large' type='primary' className='mt-20' loading={isFetchingRegister}>Đăng ký</Button>
    </form>
  )
}
