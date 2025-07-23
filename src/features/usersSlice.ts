import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UsersState {
    users: User[];
    loading: boolean;
    error?: string;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: undefined
}

//thunk to search users

export const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");

        return await response.json();
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchUsers.fulfilled, (state, action)=>{
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message || 'Unknown error';
            });

    }
});

export default usersSlice.reducer;