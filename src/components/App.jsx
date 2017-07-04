import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../styles/App.css';
import AgeStats from './AgeStats.jsx';

class App extends Component {
		constructor(props) {
				super(props);

				this.state = {
						anniversary: new Date().toString(),
						showAgeStats: false
				}

				this.changeAnniversary = this.changeAnniversary.bind(this);
		}

		changeAnniversary(e) {
				this.setState({
						showAgeStats: true
				});
				console.log(this.state);
		}

		render() {
				return(
						<div className="App">
								<Form inline>
										<h2>Input your anniversary!</h2>
										<FormControl
												type="date"
												onChange={ event => this.setState({ 
														anniversary: event.target.value,
														showAgeStats: false
													}) 
												}
										></FormControl>
										{' '}
										<Button onClick={() => this.changeAnniversary()}>Submit</Button>
										{
												this.state.showAgeStats ? <div className="fade age-stats"><AgeStats anniversary={this.state.anniversary} /></div> : <div />
										}
								</Form>
						</div>
				);
		}
}

export default App;