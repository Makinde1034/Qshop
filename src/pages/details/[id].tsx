import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCartState } from '../../state/cart/hooks'
import { useProductsState } from '../../state/product/hooks'
import Layout from '../Layout'
import type { product } from '../../interfaces'

function Details() {
  const [details, setDetails] = useState<product>()
  const { addProduct } = useCartState()
  const { products } = useProductsState()
  const [count, setCount] = useState(1)
  const router = useRouter()
  const { id } = router.query

  const getProductDetail = async () => {
    // find product state for product with route param (id)
    const product = () => {
      return products.filter((i) => i.id === Number(id))
    }
    setDetails(product()[0])
 
  }

  // ad  product to cart.
  const addProductToCart = () => {
    addProduct({
      name: details.title,
      price: details.price,
      quantity: count,
      image: details.dummyImage,
      id: details.id,
    })

  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Layout title="Details">
      <div className="pt-24 flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-6/12 lg:pr-10">
          <div className="border border-black w-full h-96">
            <img className="h-full w-full" src={details && details?.dummyImage} alt={details?.title} />
          </div>
        </div>
        <div className="w-full pt-5 xl:pt-0 lg:w-6/12 ">
          <h3 className="font-bold text-2xl">{details?.title}</h3>
          <p className="text-2xl mb-2">${details?.price}</p>
          <p>{details?.description}</p>
          <div className="mt-5">
            <input
              value={count}
              onChange={(e: any) => setCount(e.target.value)}
              min={0}
              className="border boder-black w-20 h-10 mr-2 pl-2"
              type="number"
            />
            <button onClick={() => addProductToCart()} className="bg-black text-white px-2 py-2 rounded-sm">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Details
