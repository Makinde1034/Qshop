import { createAsyncThunk } from '@reduxjs/toolkit'

const fetcher = (url) => fetch(url).then((r) => r.json())

export const getKanyeQuote = createAsyncThunk('quotes/kanyeQuote', async () => {
  const response = await fetcher('https://api.kanye.rest/')
  console.log(response)
  return response
})
