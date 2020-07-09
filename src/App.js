import React from 'react';
import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from './components/Categories';
import CardsProducts from './components/CardsProducts';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import Promo from './components/Promo';
import Restaurants from './components/Restaurants';

function App() {
  return (
    
    <div id="contenedor">
      <div id="mainpage">
        <div id="marginMain">          
              
          <Search></Search>
          <Promo></Promo>
          <Restaurants></Restaurants>
          <Categories></Categories>
          <CardsProducts></CardsProducts>
            
        </div>  
      </div>
        <ShoppingCart></ShoppingCart>
    </div>
   );
}

export default App;
