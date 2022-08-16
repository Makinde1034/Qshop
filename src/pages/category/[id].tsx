import React, { useEffect } from 'react'
import Layout from '../Layout'
import { useRouter } from 'next/router'
import api from '../../api/index'
import { useProductsState } from '../../state/product/hooks'
import ProductCard from '../../components/ProductCard'
import { _images } from '../../db'

export default function Category() {
  const { setLoading, setProducts, products, isLoading } = useProductsState()

  const router = useRouter()
  console.log(router)

  const { id } = router.query

  const fetchProducts = async () => {
    const str = []
    setLoading(true)
    try {
      const res = await api.getCategoryProduct(Number(id))
      const products = await res.json()
      console.log(products,'catproducts')
      
      for (let i = 0; i < products.slice(0,100).length; i++) {
        // console.log(products[i],_images[Math.floor(Math.random() * _images.length)])
        // loop through products to add dummy image to each product object (Due to bad response from server)
        str.push({
          description: products[i].description,
          category: products[i].category,
          id: products[i].id,
          price: products[i].price,
          title: products[i].title,
          dummyImage: _images[Math.floor(Math.random() * _images.length)],
        })
      }
      setProducts(str)
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [id])

  return (
    <Layout title="category">
      {isLoading ? (
        <div className='pt-24'>loading...</div>
      ) : (
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-col-1 gap-10 pt-24">
          { products.length > 1 && products.map((item, index) => (
            <ProductCard id={item.id} title={item.title} price={item.price} image={item.dummyImage} category={item.category} />
          ))}
        </div>
      )}
    </Layout>
  )
}
