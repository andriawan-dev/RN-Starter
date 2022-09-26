import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/data/slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
})