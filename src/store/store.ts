import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import usersReducer from "../features/usersSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        //another reducers can be added here
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;