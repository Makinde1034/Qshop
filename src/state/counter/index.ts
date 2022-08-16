import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { decrement, increment, incrementByAmount } from './actions'

type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(increment, (state) => {
        state.value++
      })
      .addCase(decrement, (state) => {
        state.value--
      })
      .addCase(incrementByAmount, (state, action: PayloadAction<number>) => {
        state.value += action.payload
      })
  },
})

export default counterSlice.reducer
