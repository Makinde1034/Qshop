import React from 'react'
import { useRouter } from 'next/router'
import type { category } from '../interfaces/index'


interface product {
  id: number
  title: string
  price: number
  image: string
  category:category
}

function ProductCard({ id, title, price,image,category }: product) {
  const router = useRouter()
  const goToDetails = (id: number) => {
    router.push({
      pathname: `/details/${id}`,
      // query: { id:id  }
    })
  }

  return (
    <div onClick={() => goToDetails(id)} className="cursor-pointer">
      <div className="h-[350px]">
        <img className="h-full w-full object-cover" alt={title} src={image} />
      </div>

      <p className="text-center mt-5 text-lg">{title} ({category.name})</p>
      <p className="text-center mt-5">${price}</p>
    </div>
  )
}

export default ProductCard
