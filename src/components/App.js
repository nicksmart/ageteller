import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anniversary: ''
        }
    }

    printToday() {
        console.log(this.state.today);
    }

    changeBirthday(e) {
        this.setState({
            anniversary: e.target.value
        });

        console.log(this.state);
    }
    
    render() {
        this.printToday();
        return(
            <div className="App">
                <Form inline>
                    <h2>Input your anniversary!</h2>
                    <FormControl 
                        type="date"
                        onChange={ event => this.setState({ anniversary: event.target.value}) }
                    ></FormControl>
                    {' '}
                    <Button onClick={() => this.changeBirthday(this.state.anniversary)}>Submit</Button>
                    <AgeStats anniversary={this.state.anniversary} />
                </Form>
            </div>
        );
    }
}

export default App;