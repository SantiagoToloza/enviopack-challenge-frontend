import { createSlice } from '@reduxjs/toolkit';
import profileData from '../../data/profile.json';

const initialState = profileData.profile

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

        //mandale reducer si son necesarios...r evisar despues 
    },
});

export default profileSlice.reducer;