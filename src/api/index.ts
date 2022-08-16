const BASE_URL = 'https://api.escuelajs.co'

export default {
  getCategories() {
    return fetch(` ${BASE_URL}/api/v1/categories`)
  },
  getProducts() {
    return fetch(`${BASE_URL}/api/v1/products`)
  },
  getCategoryProduct(id: number) {
    return fetch(`${BASE_URL}/api/v1/categories/${id}/products`)
  },
  getSingleProduct(id: number) {
    return fetch(`${BASE_URL}/api/v1/products/${id}`)
  },
}
