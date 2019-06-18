import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class FormBeers extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            tagline: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <React.Fragment>
                <h5>Add New Beer</h5>
                <div className="container">
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>ID</Label>
                            <Col sm={10}>
                                <Input
                                type="text" 
                                name="id" 
                                onChange={this.handleChange}
                                values={this.state.id}
                                  />
                                
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input
                                values={this.state.name}
                                 type="text" 
                                name="name" 
                                id="examplePassword"
                                onChange={this.handleChange}  />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Tagline</Label>
                            <Col sm={10}>
                                <Input
                                values={this.state.tagline}
                                 type="text" 
                                name="tagline" 
                                id="exampleSelect"
                                onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button>Add Beer</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    {JSON.stringify(this.state)}
                </div>
            </React.Fragment>
        )
    }
}
