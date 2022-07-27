import { createSlice } from '@reduxjs/toolkit';

// Cambiamos userNameSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
	name: 'user',
    initialState: "",
    reducers: {
        changeUser:(state, action)=>{
            return action.payload
        }        
    }
})

export const {  changeUser } = userNameSlice.actions;

export default userNameSlice.reducer;