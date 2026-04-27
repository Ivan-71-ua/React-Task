import { configureStore } from "@reduxjs/toolkit";
import examsReducer from "./examsSlice";

export const store = configureStore({
    reducer: {
        exams: examsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;