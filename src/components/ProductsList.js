import React, { useEffect, useState } from "react";
import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import star from '../assets/icons/star.svg';
import Burrito from '../assets/images/burrito.jpeg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import dataproducts from './products.json';

export default function ProductsList() {

  const products = dataproducts.map((dataproducts) => {

    return (
      <CardDeck>
                  
          <Card key ={dataproducts.id}>
            
            <Card.Img variant="top" url={dataproducts.image}  />
            <Card.Body>
              <Card.Title>{dataproducts.name}</Card.Title>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted"><img src={star} className="starIcon"/><b>{dataproducts.qualification}</b>{dataproducts.price}</small>
            </Card.Footer>
          </Card>
          
      </CardDeck>

    )
  }
)
}
