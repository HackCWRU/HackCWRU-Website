import PropTypes from 'prop-types';
import React from 'react';
import styles from 'components/FAQ/FAQ.scss';

export default class FAQ extends React.Component {

  render() {
    return (
      <div className={styles.faq}>
        <div className={styles.question}>
          {this.props.question}
        </div>
        <div className={styles.answer}>
          {this.props.answer}
        </div>
      </div>
    )
  }
}

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}
