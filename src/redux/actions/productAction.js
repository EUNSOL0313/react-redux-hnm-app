//미들웨어 함수들을 저장해놓는 곳 action

function getProducts(searchQuery) {
   return async (dispatch) => {
      let url = `https://my-json-server.typicode.com/EUNSOL0313/hnm-react-router-practice/products?q=${searchQuery}`
      let response = await fetch(url)
      let data = await response.json()
      console.log('data', data)
      dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } })
   }
}
function getProductDetail(id) {
   return async (dispatch) => {
      let url = `https://my-json-server.typicode.com/EUNSOL0313/hnm-react-router-practice/products/${id}`
      let response = await fetch(url)
      let data = await response.json()
      console.log('data', data)
      dispatch({ type: 'GET_DETAIL_SUCCESS', payload: { data } })
   }
}

export const productAction = { getProducts, getProductDetail }
