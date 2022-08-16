import React from 'react'
import Layout from '../Layout'
import CartRow from '../../components/cartRow'
import { useCartState } from '../../state/cart/hooks'

function Cart() {
  const { cart } = useCartState()
  return (
    <Layout>
      <div className="pt-36 rounded-lg overflow-x-auto w-full">
        <table className="w-full rounded-lg border border-gray overflow-x-scroll ">
          <tr className="border border-gray">
            <th className=' lg:block'></th>
            <th className="text-left pl-5  ">Product</th>
            <th className="text-left ">Price</th>
            <th className="text-left ">Quantity</th>
            <th className="text-left ">Subtotal</th>
          </tr>
          {cart.map((item, index) => (
           
            
            <CartRow id={item.id} price={item.price} name={item.name} quantity={item.quantity} image={item.image}  />
          ))}
        </table>
      </div>
    </Layout>
  )
}

export default Cart
