import { useEffect } from 'react'
import Layout from './Layout'
import api from '../api/index'
import { useProductsState } from '../state/product/hooks'
import ProductCard from '../components/ProductCard'
import { _images } from '../db'

const IndexPage = () => {
  const { setLoading, setProducts, products } = useProductsState()

  const fetchProducts = async () => {
    const str = []
    setLoading(true)
    try {
      const res = await api.getProducts()
      const products = await res.json()
      console.log(products)
      
      for (let i = 0; i < products.slice(0,100).length; i++) {
        // loop through products to add random dummy image to each product object (Due to bad response from server)
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
  }, [])

  return (
    <Layout title="Home">
      <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-col-1 gap-10 pt-24">
        {products.map((item, index) => (
          <ProductCard key={index} id={item.id} title={item.title} price={item.price} image={item.dummyImage} category={item.category} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
