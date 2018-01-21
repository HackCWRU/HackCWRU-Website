import React, { Component } from 'react';
import '../Assets/faq.css';

class Faq_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      paragraph: undefined,
      view: false,
      extend: '+'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    let title = this.props.title;
    this.setState({
      title: title
    });
  }

  handleClick() {
    if(this.state.view == false) {
      this.setState({
        view: true,
        extend: '-',
        paragraph: this.props.paragraph,
      });
    } else {
      this.setState({
        view: false,
        extend: '+',
        paragraph: undefined
      })
    }
  }

  render() {
    return(
      <div className="comp1">
        <div className="bounding_box">
          <div className="header">
            <a onClick={this.handleClick} className="theplus_thingy">{this.state.extend}</a>
          </div>
          <div className="description">
            <h4>{this.state.title}</h4>
            <p>{this.state.paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}


export default Faq_component;
