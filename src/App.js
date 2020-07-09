import React from 'react';
import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import searchIcon from './assets/icons/search.svg';
import promoimg from './assets/images/headerimage.png';
import hamburguer from './assets/icons/hamburguerColor.svg';
import watch from './assets/icons/watch.svg';
import arrowDown from './assets/icons/rightDirection.svg';
import person from './assets/icons/person.svg';
import star from './assets/icons/star.svg';
import burguer from './assets/images/burguer.jpeg';
import party from './assets/images/d.png';
import emoticon from './assets/icons/emoji.png';
import Burrito from './assets/images/burrito.jpeg';
import iconCategorie from './assets/icons/pizza.svg';
import './App.css';
import categories from './categories.json';
import products from './products.json';
import "bootstrap/dist/css/bootstrap.min.css";
import SumPersons from './SumPersons';

function App() {
  return (
    
     
    <div id="contenedor">
        <div id="mainpage">

          <div id="marginMain">          
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  <h6 id="nameCompany">= Chukwudi</h6>
                </Form.Label>
                <Col xs="8">
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text><img src={searchIcon} className="icon"/></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="Search" />
                  </InputGroup>
                </Col>
              </Form.Group>

            
            <div className="promo">

              <img src={promoimg} className="headerImg"/> 
              <a>$0 delivery for 30 days! <img src={party} className="partyIcon" /> 
              </a> 

            </div>

            <div className="restaurants">
                    Restaurants <img src={hamburguer} className="hamburguer"/>
                    <button className="joinbutton"><img src={watch} className="iconwatch"/> Delivery: <b>Now</b> <img src={arrowDown} className="arrowdown"/> </button>
            </div>
            <div className="categories">
              <label className="categorie">
                <label className="circle">
                  < img src={iconCategorie} className="iconCat"/> 
                </label>
                asdasd
              </label>
              <label className="categoriem">
                <label className="circle">
                  < img src={iconCategorie} className="iconCat"/> 
                </label>
                pizza
              </label>
              <label className="categoriem">
                <label className="circle">
                  < img src={iconCategorie} className="iconCat"/> 
                </label>
                burguer
              </label>
            </div>

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

              
          </div>  
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
                    <label className="selectnumber">
                      <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button variant="light">-</Button> <label>num</label> <Button variant="light" >+</Button>
                      </ButtonGroup>
                    </label>
                    
                    
            </div>
            
          </div>
          
    </div>
      
  );
}

export default App;
