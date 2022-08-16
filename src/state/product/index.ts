import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { product } from '../../interfaces'

interface initialStateProps {
  loading: boolean
  products: product[]
}

const initialState: initialStateProps = {
  loading: false,
  products: [],
}

const productSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setLoadingState(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    
    setAllProducts(state, action: PayloadAction<product[]>) {
      state.products = action.payload
    },
  },
})

export default productSlice.reducer

export const { setLoadingState, setAllProducts } = productSlice.actions
