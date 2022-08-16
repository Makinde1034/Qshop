import { off } from "process"

const BASE_URL = 'https://api.escuelajs.co'

export default {
  getCategories() {
    return fetch(` ${BASE_URL}/api/v1/categories`)
  },
  getProducts(offset:number) {
    return fetch(`${BASE_URL}/api/v1/products?offset=${offset}&limit=10`)
  },
  getCategoryProduct(id: number) {
    return fetch(`${BASE_URL}/api/v1/categories/${id}/products`)
  },
  getSingleProduct(id: number) {
    return fetch(`${BASE_URL}/api/v1/products/${id}`)
  },
}
