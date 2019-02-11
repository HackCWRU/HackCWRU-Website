import React, { Component } from 'react';
import '../Assets/tracks.css';


class Tracks extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
				<div className="App">
					<section className="trackSection">
						<div className="Trackheader">
							<h2 className="trackHeader">Tracks</h2>
						</div>
						<div className="bodyTextTrack">

							<div className="track">
								<div className="trackImageContainer">
									<img className="title_image" src={require('../Assets/track_fin1.png')}></img>
								</div>
								<div className="trackTextContainer">
									<h3 className="trackHeader fin">FINANCE</h3>
									<p className="trackText">The Fintech track is for hackers interested in the market and marketplace. Create a tool to help people make better financial decisions, or make a new algorithm to dominate the stock markets. Or finally figure out what “blockchain” is and what you can do with it. If you have a background in finance, work with an engineer and tackle an interesting problem together!</p>
								</div>
							</div>

							<div className="track">
								<div className="trackImageContainer">
									<img className="title_image" src={require('../Assets/track_civic.png')}></img>
								</div>
								<div className="trackTextContainer">
									<h3 className="trackHeader civic">CIVIC</h3>
										<p className="trackText">The Civic track looks at the all levels of connected devices, from local IoT networks to municipal systems and civic datasets. Create a new device for your smart home, or create something that benefits the community.</p>
								</div>
							</div>

							<div className="track">
								<div className="trackImageContainer">
									<img className="title_image" src={require('../Assets/track_healthcare.png')}></img>
								</div>
								<div className="trackTextContainer">
									<h3 className="trackHeader health">HEALTH</h3>
										<p className="trackText">The healthcare track enables hackers to tackle problems relating to medicine, healthcare, and public health. Whether it is using public health data to analyze population wellness or using mobile technology to improve patient quality of and access to care, there has never been a better opportunity to match engineering solutions with real healthcare problems. If your background is in medicine or public health, partner with an engineer and inform the science behind your project!</p>
								</div>
							</div>

							<div className="track">
								<div className="trackImageContainer">
									<img className="title_image" src={require('../Assets/track_maker.png')}></img>
								</div>
								<div className="trackTextContainer">
									<h3 className="trackHeader maker">MAKER</h3>
										<p className="trackText">The Maker track enables hackers to unleash their inner maker. Invent something new, or just tinker with a thing to make it do something different. The only requirement is that you Did It Yourself--with your team of 4, of course.</p>
								</div>
							</div>
						</div>
					</section>
      	</div>
    	);
  	}

}

export default Tracks;
