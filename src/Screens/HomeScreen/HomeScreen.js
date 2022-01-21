import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../Components/Product";
import products from "../../products";

function HomeScreen() {
  return (
    <>
      <h1>Products</h1>
      <Row>
        {products.map((product,index) => {
          return (
            <React.Fragment key={index}>
              <Col sm={12} md={6} lg={4}>
                  
                <Product product={product} />
              </Col>
            </React.Fragment>
          );
        })}
      </Row>
    </>
  );
}

export default HomeScreen;
