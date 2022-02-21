import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../../Components/Rating';

import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../actions/productAction';
import Loader from '../../Components/loader';

const ProductScreen = () => {

  
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading,error,product } = productDetails
  const {id} = useParams();

  useEffect(() => {
      dispatch(listProductDetails(id))
  },[dispatch,id])

  

  // console.log(useParams())

  // useEffect(() => {
  //   const getProduct = async() =>{
  //     const response = await axios.get(`/api/products/${id}`)
  //     setProduct(response.data)
  //   }
  //   getProduct();
  // },[id])

 
 
 
    
 
  return(
      <>
        <Link className='btn btn-dark my-3' to="/">Go back</Link>
       
       {
         loading ? <Loader/> : error ? <h3>error</h3> : 
        <Row>
          <Col md={6}>
          <Image src= {product.image} fluid alt={product.name}/>
          </Col>
          <Col md={3}>
            <ListGroup varint="flush">
            <ListGroupItem>
                <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
               <Rating value={product.rating} text ={`${product.numReviews} reviews`}/>
            </ListGroupItem>
            <ListGroupItem>
             Price : $ {product.price}
            </ListGroupItem>
            <ListGroupItem>
            Description : {product.description}
            </ListGroupItem>
            </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroupItem>
                  <Row>
                    <Col>
                    Price :
                    </Col>
                    <Col>
                    <strong> ${product.price}</strong>
                    </Col>
                  </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                  <Row>
                    <Col>
                    Status :
                    </Col>
                    <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button className='btn-block' type = "button" disabled = {product.countInStock === 0}>
                    Add To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
           
        </Row>
       }
      </>
  )
};

export default ProductScreen;
