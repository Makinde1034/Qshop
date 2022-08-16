import { useEffect } from 'react'
import Layout from './Layout'
import api from '../api/index'
import { useProductsState } from '../state/product/hooks'
import { useCartegoryState } from '../state/categories/hooks'
import ProductCard from '../components/ProductCard'
import { _images } from '../db'

const IndexPage = () => {
  const { setLoading, setProducts, setFailure, err, products, isLoading } = useProductsState()
  const { setCategory } = useCartegoryState()

  // FETCH CATEGORY LIST AND SET TO GLOBAL STATE
  const fetchCategories = async () => {
    try {
      const res = await api.getCategories()
      const categories = await res.json()
      setCategory(categories)
    } catch (err) {}
  }

  // FETCH PRODUCTS LIST AND SET TO GLOBAL STATE
  const fetchProducts = async () => {
    const str = []
    setLoading(true)
    try {
      const res = await api.getProducts()
      const products = await res.json()
      console.log(products)

      for (let i = 0; i < products.slice(0, 100).length; i++) {
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
      // sets products in state
      setProducts(str)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      // set failure state to true if error occurs
      setFailure(true)
    }
  }

  useEffect(() => {
    fetchProducts()
    Promise.all([fetchCategories(), fetchProducts()])
  }, [])

  return (
    <Layout title="Home">
      {!err ? (
        isLoading ? (
          <div>loading...</div>
        ) : (
          <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-col-1 gap-10 pt-10 lg:pt-24">
            <div className=" flex justify-center lg:hidden w-full ">
              <input
                className="mt-10 lg:mt-0  lg:block  w-full border lg:w-[150px] border-gray rounded-sm pl-2  h-12 outline-none lg:h-8"
                type="text"
                placeholder="Search"
              />
            </div>

            {products.map((item, index) => (
              <ProductCard
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.dummyImage}
                category={item.category}
              />
            ))}
          </div>
        )
      ) : (
        <div className='pt-24 text-center'>An error occured.Check you inte Please try again.</div>
      )}
    </Layout>
  )
}

export default IndexPage
