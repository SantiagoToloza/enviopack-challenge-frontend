import { createSlice } from '@reduxjs/toolkit';
import profileData from '../../data/profile.json';

const initialState = {
    balance: profileData.profile.credit, // Crédito inicial desde el JSON
};

const creditSlice = createSlice({
    name: 'credit',
    initialState,
    reducers: {
        deductCredit: (state, action) => {
            state.balance -= action.payload;
        },
        resetCredit: (state) => {
            state.balance = profileData.profile.credit;
        },
    },
});

export const { deductCredit, resetCredit } = creditSlice.actions;
export default creditSlice.reducer;