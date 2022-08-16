import { createAction } from '@reduxjs/toolkit'

export const increment = createAction<void>('counter/increment')
export const decrement = createAction<void>('counter/decrement')
export const incrementByAmount = createAction<number>('counter/incrementByAmount')
