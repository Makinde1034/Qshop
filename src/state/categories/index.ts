import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { category } from '../../interfaces'


interface initialStateProps {
  categories :category[]
}

const initialState: initialStateProps = {
  categories : []
}

const cartSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    _setCategories(state, action: PayloadAction<category[]>) {
        state.categories = action.payload
    }
  }
})

export default cartSlice.reducer

export const { _setCategories } = cartSlice.actions
