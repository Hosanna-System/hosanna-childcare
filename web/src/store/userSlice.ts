// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/types.ts';

const initialState: UserState = {
    isLoggedIn: false,
    username: '',
    userId: '', // Ajoutez l'ID utilisateur ici
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ username: string; userId: string }>) {
            state.isLoggedIn = true;
            state.username = action.payload.username;
            state.userId = action.payload.userId;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.username = '';
            state.userId = '';
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;