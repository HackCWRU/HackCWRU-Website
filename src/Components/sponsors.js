import React, { Component } from 'react';
import { Button, Row, Col, Panel } from 'react-bootstrap';
import '../Assets/sponsors.css';

class Sponsors extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
				<div className="App">
					<section className="sSection">
						<div className="SHeader">
							<h2 className="sHeader">Sponsors</h2>
						</div>
						<div className="sBody">
							<div className="e1">
								<p>Coming Soon...</p>
							</div>
						</div>
					</section>
				</div>
    	);
  	}

}

export default Sponsors;
