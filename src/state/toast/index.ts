import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { cartItem } from '../../interfaces'

interface initialStateProps {
  isToastOpen : boolean
  msg : string
}

const initialState: initialStateProps = {
  isToastOpen : false,
  msg : ''
}

const toastSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    toggleToast(state, action: PayloadAction<initialStateProps>) {
        state.isToastOpen = action.payload.isToastOpen,
        state.msg = action.payload.msg
    }
  },
})

export default toastSlice.reducer

export const { toggleToast } = toastSlice.actions
