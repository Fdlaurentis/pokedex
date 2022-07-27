import { createSlice } from '@reduxjs/toolkit';

// Cambiamos itemsPageSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const itemsPageSlice = createSlice({
	name: 'itemsPage',
    initialState: '16',
    reducers: {
        selectItem:(state, action)=>{
            return action.payload
        }
    }
})

export const { selectItem } = itemsPageSlice.actions;

export default itemsPageSlice.reducer;