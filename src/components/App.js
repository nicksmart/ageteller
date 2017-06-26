import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

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
        console.log(this.state);
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
                </Form>
            </div>
        );
    }
}

export default App;