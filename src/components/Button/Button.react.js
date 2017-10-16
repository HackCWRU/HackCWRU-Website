import PropTypes from 'prop-types';
import React from 'react';
import styles from 'components/Button/Button.scss';

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
      <div className={styles[this.props.color] || styles.button}>
        {externalLink ? <a target="_blank" href={externalLink}>
          {this.renderButton()}
        </a> : this.renderButton()}
      </div>
    );
  }

}

Button.propTypes = {
  title: PropTypes.string,
  externalLink: PropTypes.string,
  color: PropTypes.oneOf(['red', 'darkBlue'])
};
