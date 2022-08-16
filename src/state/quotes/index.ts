import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getKanyeQuote } from './actions'

export type QuotesState = {
  data: { quote: string }
  pending: boolean
  error: boolean
}

const initialState: QuotesState = {
  data: { quote: '' },
  pending: false,
  error: false,
}

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getKanyeQuote.pending, (state) => {
        state.pending = true
      })
      .addCase(getKanyeQuote.fulfilled, (state, action: PayloadAction<{ quote: string }>) => {
        state.pending = false
        state.data = action.payload
      })
      .addCase(getKanyeQuote.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  },
})

export default quotesSlice.reducer
