import { useAppSelector, useAppDispatch } from '../hooks'
import type { product } from '../../interfaces'
import { setLoadingState, setAllProducts, setRequestFailure } from '.'

// hook to easily interact with products state
export const useProductsState = () => {
  const dispatch = useAppDispatch()

  const setProducts = (payload: product[]) => dispatch(setAllProducts(payload))
  const setLoading = (payload: boolean) => dispatch(setLoadingState(payload))
  const setFailure = (payload:boolean) => dispatch(setRequestFailure(payload))

  const products = useAppSelector((state) => state.products.products)
  const isLoading = useAppSelector((state) => state.products.loading)
  const err = useAppSelector((state) => state.products.err)


  return { setProducts, setLoading, products, isLoading, setFailure, err }
}
