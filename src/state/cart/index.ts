import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { cartItem } from '../../interfaces'

interface initialStateProps {
  cart: cartItem[]
  
}

const initialState: initialStateProps = {
  cart: [],
  
}

const cartSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<cartItem>) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {
          state.cart[i].quantity += action.payload.quantity
          return
        }
      }
      state.cart.push(action.payload)
    },

    removeProductFromCart(state, action: PayloadAction<number>) {
      const filterState = () => {
        return state.cart.filter((i) => i.id !== action.payload)
      }
      state.cart = filterState()
    },

    changeQuantity(state, action: PayloadAction<{ id: number; count: number }>) {
      const newState = []
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {
          state.cart[i].quantity = action.payload.count
          newState.push(state.cart[i])
        } else {
          newState.push(state.cart[i])
        }
      }
      state.cart = newState
    },
    
  },
})

export default cartSlice.reducer

export const { addProductToCart, removeProductFromCart, changeQuantity} = cartSlice.actions
