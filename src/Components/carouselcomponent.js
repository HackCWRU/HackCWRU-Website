import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Assets/carousel.css';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.css';

class CarouselComponent extends React.Component {
	constructor(...args) {
		super(...args);
	}

	render() {
		return (
			<section className="carousel">
			<div display={"inline-block"} width={"70%"}>
				<Carousel
					showArrows={false}
					showStatus={false}
					showIndicators={false}
					showThumbs={false}
					stopOnHover={false}
					interval={2000}
					transitionTime={4000}
					useKeyboardArrows={false}
					infiniteLoop={true}
					autoPlay={true}
					>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/1.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/2.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/3.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/4.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/5.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/6.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/7.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/8.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/9.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/10.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/11.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/12.jpg')} /></div>
							<div><img className="carIm"  alt="900x600" src={require('../Assets/scroll-pictures/13.jpg')} /></div>
					</Carousel>
				</div>
				</section>
			);
  	}

}

export default CarouselComponent;
