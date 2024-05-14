import { LoginType, RegisterType } from 'schema';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { qlNguoiDungServices } from 'services';
import { sleep } from 'utils';

export const registerThunk = createAsyncThunk('quanLyNguoiDung/register',
 async(payload: RegisterType, {rejectWithValue, dispatch, getState}) => {
    try {
        console.log(payload)
        await sleep(3000)
        //call api dang ky tai khoan 
        const res = await qlNguoiDungServices.dangKy(payload)
        // sleep them 1s
        return res
    }catch(err) {
        return rejectWithValue
    }
 })

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async (payload: LoginType, {rejectWithValue}) => {
        try {
            const result = await qlNguoiDungServices.dangNhap(payload)
            console.log('result',result)
            return result
        }
        catch(err) {
            return rejectWithValue(err)
        }
    }
)