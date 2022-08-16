import { useAppSelector, useAppDispatch } from '../hooks'
import type { category } from '../../interfaces'
import { _setCategories } from '.'

// hook to easily interact with products state
export const useCartegoryState = () => {
  const dispatch = useAppDispatch()

 
  const setCategory = (payload:category[]) => dispatch(_setCategories(payload))

  const categoriesList = useAppSelector((state) => state.categories.categories)

  return { setCategory, categoriesList }
}
