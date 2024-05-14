import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from 'antd'
// import { error } from 'console'
// import { error } from 'console'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { LoginType, loginSchema } from 'schema'
import { useAppDispatch } from 'store'
import { quanLyNguoiDungActionsThunks } from 'store/quanLyNguoiDung'

export const LoginTemplate = () => {
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(loginSchema)
  })

  const dispatch = useAppDispatch()

  const onsubmit: SubmitHandler<LoginType> = (values) => {
    dispatch(quanLyNguoiDungActionsThunks.loginThunk(values))
  }
  return (
    <form className='text-white ' onSubmit={handleSubmit(onsubmit)}>
      <h1 className='text-[30px]'>Đăng nhập</h1>
      <div className='mt-10'>
        <p className='mb-10'>Tài khoản</p>
        <Controller control={control} name="taiKhoan" render = {({field}) => <Input{...field}/>}/>
        {!!errors?.taiKhoan && (<p className='text-red-500 text-[12px]'>{errors.taiKhoan.message}</p>)}
      </div>
      <div className='mt-10'>
        <p className='mb-10'>Mật khẩu</p>
        <Controller control={control} name="matKhau" render = {({field}) => <Input.Password{...field}/>}/>
        {!!errors?.matKhau && (<p className='text-red-500 text-[12px]'>{errors.matKhau.message}</p>)}
      </div>
      <Button htmlType='submit' type='primary' danger className='mt-20'>Đăng nhập</Button>
    </form>
  )
}
