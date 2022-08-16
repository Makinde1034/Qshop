import { useAppSelector, useAppDispatch } from '../hooks'
import { increment, decrement, incrementByAmount } from './actions'

export const useCounterState = () => {
  return useAppSelector((state) => state.counter)
}

export const useCounterActionHandler = () => {
  const dispatch = useAppDispatch()

  const onIncrement = () => dispatch(increment())
  const onDecrement = () => dispatch(decrement())
  const onIncrementByAmount = (amount: number) => dispatch(incrementByAmount(amount))

  return { onIncrement, onDecrement, onIncrementByAmount }
}
