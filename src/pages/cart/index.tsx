import React from 'react'
import Layout from '../Layout'
import CartRow from '../../components/cartRow'
import { useCartState } from '../../state/cart/hooks'

function Cart() {
  const { cart } = useCartState()

  const totalPrice = cart
    .map((item) => {
      return item.price * item.quantity
    })
    .reduce((item1, item2) => item1 + item2, 0)

  return (
    <Layout>
      <div className="pt-36 overflow-x-auto w-full">
        <table className="w-full rounded-lg border border-gray overflow-x-scroll ">
          <tr className="border border-gray">
            <th className=" lg:block"></th>
            <th className="text-left pl-5  ">Product</th>
            <th className="text-left ">Price</th>
            <th className="text-left ">Quantity</th>
            <th className="text-left ">Subtotal</th>
          </tr>
          {cart.map((item, index) => (
            <CartRow
              key={index}
              id={item.id}
              price={item.price}
              name={item.name}
              quantity={item.quantity}
              image={item.image}
            />
          ))}
        </table>
        <div className="w-full flex justify-between border rounded-sm p-5 border-gray mt-5">
          <p className="font-semibold">Total</p>
          <p>${totalPrice}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-black font-semibold text-white px-8 py-2 rounded-sm mt-5">Checkout</button>
      </div>
    </Layout>
  )
}

export default Cart
