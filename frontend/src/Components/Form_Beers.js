import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import store from '../store/store'
import uuid from "uuid";
export default class FormBeers extends Component {
    constructor(props){
        super(props)
        this.state = { 
            id: '',
            name: '', 
            tagline: '', 
            isEditing: false
        }
        
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this);

    }
    
    onChange = (e) => {
        e.preventDefault()
         this.setState({ [e.target.name]: e.target.value });
    } 

    onSubmit = (e) => {
       e.preventDefault()
       const beer = {
           id: uuid(),
           name: this.state.name,
           tagline: this.state.tagline
        }
        
        this.setState({ beer });
           this.props.onAddBeer(beer)

        this.setState({
            
            name: '',
            tagline: ''
        })

    } 

    render() {
        console.log("State in Store", store.getState().beerState.beers)
        return (
            <React.Fragment>
                <h5>Add New Beer</h5>
                <div className="container">
                    <Form onSubmit={this.onSubmit}>
                        
                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input
                                value={this.state.name}
                                 type="text" 
                                name="name" 
                                id="examplePassword"
                                onChange={this.onChange}
                                  />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Tagline</Label>
                            <Col sm={10}>
                                <Input
                                        value={this.state.tagline}
                                    type="text" 
                                  name="tagline" 
                                id="exampleSelect"
                         onChange={this.onChange}
                                 />
                            </Col>
                        </FormGroup>
                        
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button>Add Beer</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}
