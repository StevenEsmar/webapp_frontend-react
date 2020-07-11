import React from 'react';
//import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import promoimg from '../assets/images/headerimage.png';
import party from '../assets/images/d.png';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Promo() {
    
    return(
        <div className="promo">

              <img src={promoimg} className="headerImg"/> 
              <a className="fontpromo">$0 delivery for 30 days! <img src={party} className="partyIcon" /> 
              </a> 

            </div>
    )
}

export default Promo;