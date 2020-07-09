import React from 'react';
import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import star from '../assets/icons/star.svg';
import Burrito from '../assets/images/burrito.jpeg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";


function CardsProducts() {
    
    return(
        <CardDeck>
              <Card>
                <Card.Img variant="top" src={Burrito}  />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><img src={star} className="starIcon"/><b>4.5</b> Creperies Sandwich</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Burrito} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><img src={star} className="starIcon"/><b>4.5</b> Creperies Sandwich</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={Burrito}  />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"><img src={star} className="starIcon"/><b>4.5</b> Creperies Sandwich</small>
                </Card.Footer>
              </Card>
            </CardDeck>
    )
}

export default CardsProducts;