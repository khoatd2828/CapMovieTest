import { quanLyNguoiDungActionsThunks } from 'store/quanLyNguoiDung';
import { createSlice } from "@reduxjs/toolkit";

export const {reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions} = createSlice({
    name: 'quanLyNguoiDung',
    initialState: {
        isFetchingRegister: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(quanLyNguoiDungActionsThunks.registerThunk.pending, (state) => {
            state.isFetchingRegister = true
        })
        .addCase(quanLyNguoiDungActionsThunks.registerThunk.fulfilled, (state, {payload}) => {
            state.isFetchingRegister = false
        })
        .addCase(quanLyNguoiDungActionsThunks.registerThunk.rejected, (state, action) => {
            state.isFetchingRegister = false
        })
    }
})

