import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../Assets/Button.css';

class Button extends Component {

  renderButton() {
    return (
      <div>
        <button className={this.props.color}>
          <a className="links" target="_blank" href={this.props.externalLink}>{this.props.title}</a>
        </button>
      </div>
    )
  }

  render() {
    const { externalLink } = this.props;

    return (
      <div>
        {this.renderButton()}
      </div>
    );
  }

}

Button.propTypes = {
  title: PropTypes.string,
  externalLink: PropTypes.string,
  color: PropTypes.oneOf(['red', 'darkBlue'])
};

export default Button;
