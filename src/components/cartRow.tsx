import React, { useState } from 'react'
import Image from 'next/image'
import type { cartItem } from '../interfaces'
import cancel from '../assets/images/close.png'
import { useCartState } from '../state/cart/hooks'

function CartRow({ id, name, quantity, price, image }: cartItem) {
  const [quantityCount, setQuantityCount] = useState(quantity)
  const { deleteProduct, setCartItemQuantity } = useCartState()

  const handleQuantityChange = (e: any) => {
    setQuantityCount(e.target.value)
    setCartItemQuantity({ id: id, count: e.target.value })
  }

  return (
    <tr className=" border border-gray">
      <td className="pl-5 py-2 ">
        <div className=' flex items-center'>
          <div onClick={() => deleteProduct(id)} className="w-3 h-3 mr-10 mb-2 cursor-pointer lg:visible">
            <Image className="" src={cancel} alt="image" />
          </div>{' '}
          <img  className="w-8 h-8 hidden lg:block" src={image} alt="image" />
        </div>
      </td>
      <td className="pl-5 py-2">{name}</td>
      <td>${price}</td>
      <td className="py-2">
        <input
          onChange={(e: any) => handleQuantityChange(e)}
          value={quantityCount}
          min={1}
          className="border boder-black w-20 h-8 mr-2 pl-2"
          type="number"
        />
      </td>
      <td>${price * quantity}</td>
    </tr>
  )
}

export default CartRow
