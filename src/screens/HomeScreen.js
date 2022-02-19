import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { Products} from '../components/Products'

import products from '../products'

export const HomeScreen = () => {
  return (
    <div>
        <h1>Latest products</h1>
        <Row>
            { products.map(product => (
                
                <Col sm={12} md={6} lg={4} xl={3}> 
                    <Products product={product} />
                </Col>

               


            ))}

        </Row>

    </div>
  )
}
