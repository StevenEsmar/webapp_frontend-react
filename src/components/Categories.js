import React from 'react';
import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import iconCategorie from '../assets/icons/pizza.svg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import datacategories from '../data/categories.json';

const categori = datacategories.map((datacategories) => {

  
    return(
        <div className="categories">
         
        <label key={datacategories.id} className="categoriem">
          <label className="circle">
            < img src={datacategories.icon} className="iconCat"/> 
          </label>
          {datacategories.name}
        </label>
        
      </div>
    )
  }
)

function Categories() {
  return categori
}

export default Categories;