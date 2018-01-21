import React, { Component } from 'react';
import logo_pls from '../Assets/Artboard_0-50.gif'


class Logo extends Component {

  constructor(props) {
		super(props);
	}

  render() {
    const logoSytle = {
      position:'relative',
      width:"100%",
    }
    return(
      <div className="logo">
        <img style={logoSytle} className="logo" src={logo_pls}></img>
      </div>
    );
  }

}
export default Logo;
