import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
   let { id } = useParams()
   const [product, setProduct] = useState(null)
   const getProductDetail = async () => {
      let url = `https://my-json-server.typicode.com/EUNSOL0313/hnm-react-router-practice/products/${id}`
      let response = await fetch(url)
      let data = await response.json()
      console.log('data', data)
      setProduct(data)
   }
   useEffect(() => {
      getProductDetail()
   }, [])

   return (
      <div>
         <Container>
            <Row>
               <Col className="product-img">
                  <img src="{product?.img}" />
               </Col>
               <Col className="product-info">
                  <div>{product?.title}</div>
                  <div>₩ {product?.price}</div>
                  <div>{product?.choice == true ? 'Conscious choice' : ''}</div>
                  <div>
                     {' '}
                     <Dropdown>
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                           사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                           <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                           <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
                  <div className="d-grid gap-2 ">
                     <button className="add-button">추가</button>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default ProductDetail
