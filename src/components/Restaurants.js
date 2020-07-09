import React from 'react';
//import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import hamburguer from '../assets/icons/hamburguerColor.svg';
import watch from '../assets/icons/watch.svg';
import arrowDown from '../assets/icons/rightDirection.svg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Restaurants() {
    
    return(
        
        <div className="restaurants">
            Restaurants <img src={hamburguer} className="hamburguer"/>
            <button className="joinbutton"><img src={watch} className="iconwatch"/> Delivery: <b>Now</b> <img src={arrowDown} className="arrowdown"/> </button>
        </div>
 
    )
}

export default Restaurants;