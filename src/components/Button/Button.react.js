import PropTypes from 'prop-types';
import React from 'react';

export default class Button extends React.Component {

  renderButton() {
    return (
      <div>
        <button>
          {this.props.title}
        </button>
      </div>
    )
  }

  render() {
    const { externalLink } = this.props;

    return (
      <div>
        {externalLink ? <a target="_blank" href={externalLink}>
          {this.renderButton()}
        </a> : this.renderButton()}
      </div>
    );
  }

}

Button.propTypes = {
  title: PropTypes.string,
  externalLink: PropTypes.string
};
