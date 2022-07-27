import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slices/userName.slice'
import itemsPageSlice from './slices/itemsPage.slice'

export default configureStore({
  reducer: {
    userName: userNameSlice,
    itemsPage: itemsPageSlice
	}
})