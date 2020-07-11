import React from 'react';
import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import person from '../assets/icons/person.svg';
import arrow from '../assets/icons/right.svg';
import burguer from '../assets/images/burguer.jpeg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginNav from './LoginNav';


function ShoppingCart() {
    
    return(
        <div id="orders">
          <LoginNav></LoginNav> 
            <div id="marginorders">
                  <div className="cartshop">
                  <img src={person} className="personIcon"/> <button className="counter">3</button>
                  <p id="ordertext">My 😎  Order</p>
                  </div>
                    <div id="cardtime">
                      <div id="left">
                        625 St Marks Ave <br/><br/>
                        35 min
                      </div>

                      <div id="right">
                        <div><a id="links" href=""><b>Edit </b></a><br/><br/>
                        <a id="links" href=""><b>Choose time</b></a></div>
                      </div>
                    </div> 
                    <div className="carproducts">
                        <div>
                          <img src={burguer} className="productphoto"/>

                        </div>
                        <div>
                          <img src={burguer} className="productphoto"/>

                        </div>
                        <div>
                          <img src={burguer} className="productphoto"/>
                          
                        </div>
                        <div>
                          <img src={burguer} className="productphoto"/>

                        </div>
                    </div>
                    <div>
                      <h2 id="sum">Total: suma</h2>
                      <hr />  
                    </div>
                    <label className="selectnumber">
                      <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button variant="light">-</Button> <label>1</label> <Button variant="light" >+</Button>
                      </ButtonGroup>
                      Persons
                    </label>
                    <Button variant="warning" >Checkout <img src={arrow} className="iconArrow"/></Button>
                    
                    
            </div>
            
          </div>
    )
}

export default ShoppingCart;