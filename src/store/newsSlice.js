import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            title:'New Weapon',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, illum.'
        },
        {
            title:'New Weapon',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, illum.'
        },
        {
            title:'New Weapon',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, illum.'
        },

    ],
    isActive: false,
}

const newsReducer = createSlice({
    name: 'news',
    initialState: initialState,
    reducers:{
        toggle: (state, action) => {
            return{
                ...state, isActive: !state.isActive
            }
        }
    }

})

export default newsReducer.reducer
export const {toggle } = newsReducer.actions