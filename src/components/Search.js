import React from 'react';
import {Navbar,InputGroup,Row,Col,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import searchIcon from '../assets/icons/search.svg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Search() {
    
    return(
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
    )
}

export default Search;