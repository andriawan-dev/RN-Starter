import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";

const namespace = 'auth';


export const postLogin = createAsyncThunk(
    `${namespace}/postLogin`, async ({username,password}) => {
        return await authService.postLogin({
            username:username,
            password:password
        });
    }
)

const authSlice = createSlice({
    name: namespace,
    initialState: {
        status: false,
        message: "",
        data: null,
        isLoading: false,
    },
    extraReducers: {
        // post Loading ======================
        [postLogin.pending](state){
            state.status = false;
            state.message = '';
            state.data = null;
            state.isLoading = true;
        },
        [postLogin.fulfilled](state,{payload}){
            state.status = payload.status;
            state.message = payload.message;
            state.data = payload.data;
            state.isLoading = false;
        },
        [postLogin.rejected](state,{error}){
            state.status = false;
            state.message = error.message;
            state.data = null;
            state.isLoading = false;
        },
    }
});

export default authSlice.reducer;