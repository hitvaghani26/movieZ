import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {name: "hit"},
        genres:{},
    },
    reducers:{
        gerApiConfiguration (state,action){
            state.url= action.payload;
        },
        getGenres(state,action){
            state.genres = action.payload;
        },
    },
})

export const {gerApiConfiguration, getGenres} = homeSlice.actions;

export default homeSlice.reducer;