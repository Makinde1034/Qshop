import { useEffect, useState } from 'react'
import Layout from './Layout'
import api from '../api/index'
import { useProductsState } from '../state/product/hooks'
import { useCartegoryState } from '../state/categories/hooks'
import ProductCard from '../components/ProductCard'
import Preloader from '../components/Preloader'
import { _images } from '../db'

const IndexPage = () => {
  const { setLoading, setProducts, _setNextProductData, setFailure, err, products, isLoading } = useProductsState()
  const { setCategory } = useCartegoryState()
  const [offset, setOffset] = useState(0)
  const [fetchingNextData, setFetchNextData] = useState(false)

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
      const res = await api.getProducts(offset)
      const products = await res.json()
      console.log(products)

      for (let i = 0; i < products.length; i++) {
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

  // FETCH MORE PRODUCTS ON SCROLL AND ADD TO GLOBAL STATE
  const fetchDataAndPaginate = async () => {
    const str = []
    setOffset(offset + 10)
    setFetchNextData(true)
    try {
      const res = await api.getProducts(offset)
      const products = await res.json()
      console.log(products, offset, 'newly fetchdata')

      for (let i = 0; i < products.length; i++) {
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
      // add newly fetched products to state
      _setNextProductData(str)
      setFetchNextData(false)
    } catch (err) {
      setFetchNextData(false)
    }
  }

  // call fetch next data set function when user scrolls down
  useEffect(() => {
    window.onscroll = async () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchDataAndPaginate()
      }
    }
  })

  return (
    <Layout title="Home">
      {!err ? (
        isLoading ? (
          <div className="pt-96 flex justify-center">
            <Preloader />
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-col-1 gap-10 pt-10 lg:pt-24 pb-24">
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
            {fetchingNextData && (
              <div className="flex justify-center fixed bottom-10 right-[50%]">
                <Preloader />
              </div>
            )}
          </div>
        )
      ) : (
        <div className="pt-24 text-center">An error occured.Check you inte Please try again.</div>
      )}
    </Layout>
  )
}

export default IndexPage
