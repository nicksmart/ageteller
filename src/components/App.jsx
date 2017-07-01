import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../styles/App.css';
import AgeStats from './AgeStats.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anniversary: new Date().toString()
        }

        this.changeAnniversary = this.changeAnniversary.bind(this);
    }

    changeAnniversary(e) {
        console.log(this.state);
    }
    
    render() {
        return(
            <div className="App">
                <Form inline>
                    <h2>Input your anniversary!</h2>
                    <FormControl 
                        type="date"
                        onChange={ event => this.setState({ anniversary: event.target.value}) }
                    ></FormControl>
                    {' '}
                    <Button onClick={() => this.changeAnniversary()}>Submit</Button>
                    <AgeStats anniversary={this.state.anniversary} />
                </Form>
            </div>
        );
    }
}

export default App;