import { useAppSelector, useAppDispatch } from '../hooks'
import type { cartItem } from '../../interfaces'
import { addProductToCart, removeProductFromCart, changeQuantity } from '.'

// hook to easily interact with cart state
export const useCartState = () => {
  const dispatch = useAppDispatch()

  const deleteProduct = (payload: number) => dispatch(removeProductFromCart(payload))
  const addProduct = (payload: cartItem) => dispatch(addProductToCart(payload))
  const setCartItemQuantity = (payload:any) => dispatch(changeQuantity(payload))
  

  const cart = useAppSelector((state) => state.cart.cart)
  

  return { deleteProduct, addProduct, setCartItemQuantity, cart }
}
