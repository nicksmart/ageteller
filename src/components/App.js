import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            birthday: ''
        }
    }

    changeBirthday() {
        this.setState({
            birthday: this.state.date
        });
    }
    
    render(){
        return(
            <div className="App">
                <Form inline>
                    <h2>Input your birthday!</h2>
                    <FormControl 
                        type="date"
                        onChange={ event => this.setState({ date: event.target.value}) }
                    ></FormControl>
                    {' '}
                    <Button onClick={() => this.changeBirthday()}>Submit</Button>
                    <AgeStats birthday={this.state.birthday} />
                </Form>
            </div>
        );
    }
}

export default App;