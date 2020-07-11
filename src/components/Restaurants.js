import React from 'react';
import {Navbar,Dropdown,DropdownButton,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import hamburguer from '../assets/icons/hamburguerColor.svg';
import watch from '../assets/icons/watch.svg';
import arrowDown from '../assets/icons/rightDirection.svg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Restaurants() {
    
    return(
        
        <div className="restaurants">
            Restaurants <img src={hamburguer} className="hamburguer"/>
            <label className="joinbutton"><img src={watch} className="iconwatch"/> 
            <DropdownButton as={ButtonGroup}  title="  Delivery: " id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">Now</Dropdown.Item>
                <Dropdown.Item eventKey="2">Shedule</Dropdown.Item>
            </DropdownButton>  </label>
            
        </div>
 
    )
}

export default Restaurants;