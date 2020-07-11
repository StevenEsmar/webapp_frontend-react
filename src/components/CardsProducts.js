import React from 'react';
import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import star from '../assets/icons/star.svg';
import Burrito from '../assets/images/burrito.jpeg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import dataproducts from './products.json';

const products = dataproducts.map((dataproducts) => {
  
  return(
    <CardDeck>
                
      <Card key ={dataproducts.id} >
        <Card.Img variant="top" src={dataproducts.image} />
        <Card.Body >
          <Card.Title class="sizet">{dataproducts.name}</Card.Title>
          <a class="pricePr">Price: ${dataproducts.price}</a>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted"><img src={star} className="starIcon"/><b class="qualification">{dataproducts.qualification}</b></small>
        <Button variant="warning" className="float-right" id="addcartbutton">Add to cart</Button>
        </Card.Footer>
      </Card>

    </CardDeck>  
    
  )
}
)

function CardsProducts() {
  return products
  
}

export default CardsProducts;