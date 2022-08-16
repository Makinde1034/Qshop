import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { product } from '../../interfaces'

interface initialStateProps {
  loading: boolean
  products: product[]
  err:boolean
}

const initialState: initialStateProps = {
  loading: false,
  products: [],
  err:false
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
    setRequestFailure(state,action:PayloadAction<boolean>){
      state.err = action.payload
    }
  },
})

export default productSlice.reducer

export const { setLoadingState, setAllProducts, setRequestFailure } = productSlice.actions
