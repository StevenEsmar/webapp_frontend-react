import React from 'react';
import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import iconCategorie from '../assets/icons/pizza.svg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Categories() {
    
    return(
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
    )
}

export default Categories;