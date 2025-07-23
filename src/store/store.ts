import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counterSlice";
import usersReducer from "../features/usersSlice";

export const store = configureStore({
    reducer:{
        counter: countReducer,
        users: usersReducer,
        //other reducerts can be added here
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;