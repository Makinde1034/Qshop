import { useAppSelector, useAppDispatch } from '../hooks'
import { getKanyeQuote } from './actions'

export const useQuotesState = () => {
  return useAppSelector((state) => state.quotes)
}

export const useQuotesActionHandler = () => {
  const dispatch = useAppDispatch()

  const onGetKanyeQuote = () => dispatch(getKanyeQuote())

  return { onGetKanyeQuote }
}
