import React, { Component } from 'react';
import Button from './Button.js'
import '../Assets/Intro_Section.css';
import Hackry from 'hackry';


import Logo from './Logo.js'

class Intro_Section extends Component {

	constructor(props) {
		super(props);
		this.hackry = new Hackry('NQZBtoIMDJ');
	}

	componentWillMount() {
    this.hackry.faqs((faqs) => {
      this.setState({
        faqs: faqs
      });
    });

    this.hackry.events((events) => {
      this.setState({
        events: events
      });
    });
  }

	render() {
    	return (
      	<div className="Intro_Section">
					<div className="center_row">
						<div className="logoContainer">
							<Logo
							/>
						</div>
						<div className="introText" >
							<img className="title_image" src={require('../Assets/hackCWRU_Title.png')}></img>
							<h3 className="university">Case Western<br></br> Reserve University</h3>
							<h3>February 16-18, 2018</h3>
							<Button
	              title='Register'
	              externalLink='https://dashboard.hackry.io/register?hackathonId=NQZBtoIMDJ'
	              color='red' />
							<br/>
							<Button
								title="Mentor"
								externalLink='https://docs.google.com/forms/d/1tOQuo9qX7XM1xhtH1b3pJAHezjANAUCNrrtWUolWcR8/edit'
								color="darkBlue"
							/>

						</div>
					</div>
      	</div>
    	);
  	}

}

export default Intro_Section;
