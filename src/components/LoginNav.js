import React from 'react';
import {Navbar,Brand,Link,Modal,Nav,Button, ButtonGroup,Form,FormControl,CardGroup, Container, Card, CardDeck} from 'react-bootstrap';
import person from '../assets/icons/person.svg';
import arrow from '../assets/icons/right.svg';
import burguer from '../assets/images/burguer.jpeg';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
//import StyleFirebaseAuth from "react-firebase/StyleFirebaseAuth";


class LoginNav extends React.Component{
    
    uiConfig={
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks:{
            signInSuccess: () => false
        }
    }

    constructor(){
        super()
        this.state={
            show:false
        }
    }

    handleModal(){
        this.setState({show:!this.state.show})
    }

    render() {
    return(
        <div>
            <Navbar bg="dark" variant="dark" class="logbar">
                
                <Nav className="ml-auto">
                
                <Nav.Link href="#" onClick={()=> {this.handleModal()}}>SignUp</Nav.Link>
                
                </Nav>
                
            </Navbar>

                <Modal show={this.state.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div class="buttonsSign">
                            <Button variant="primary" class="signButton" type="submit">Save changes</Button>
                            <Button variant="secondary" class="closeButton" onClick={()=> {this.handleModal()}}>Close</Button>
                            </div>
                        </Form>
                    </Modal.Body>

                </Modal>    
        </div>   
    )
    }
}
export default LoginNav;