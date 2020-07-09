import React from 'react';
import {Navbar,Nav, Button, ButtonGroup,Form,FormControl, Container, Card} from 'react-bootstrap';
import searchIcon from './assets/icons/search.svg';
import promoimg from './assets/images/headerimage.png';
import hamburguer from './assets/icons/hamburguerColor.svg';
import watch from './assets/icons/watch.svg';
import arrowDown from './assets/icons/rightDirection.svg';
import person from './assets/icons/person.svg';
import burguer from './assets/images/burguer.jpeg';
import party from './assets/images/d.png';
import emoticon from './assets/icons/emoji.png';
import './App.css';
import categories from './categories.json'
import products from './products.json'

function App() {
  return (
    
     
    <div id="contenedor">
          <div id="mainpage"> 
            
          </div>
          
          <div id="orders"> 
            <div id="marginorders">
                  <div className="loginb">
                  <img src={person} className="personIcon"/> <button className="counter">3</button>
                  <p>My 😎 <br/> Order</p>
                  </div>
                    <div id="cardtime">
                      <div id="left">
                        625 St Marks Ave <br/><br/>
                        35 min
                      </div>

                      <div id="right">
                        <div id="links">Edit <br/><br/>
                        Choose time</div>
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
                      <h2>Total: suma</h2>
                      <hr />  
                    </div>

                    <ButtonGroup className="mr-2" aria-label="Second group">
                      <Button>5</Button> <Button>6</Button> <Button>7</Button>
                    </ButtonGroup>    
            </div>   
          </div>
    </div>
      
  );
}

export default App;
