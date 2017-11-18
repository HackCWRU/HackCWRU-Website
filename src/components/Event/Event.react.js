import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Event/Event.scss';

export default class Event extends React.Component {

  render() {
    return (
      <div className={styles.event}>
        <div className={styles.name}>
          {this.props.name}
        </div>
        <div className={styles.whenAndWhere}>
          {`${this.props.when} | ${this.props.where}`}
        </div>
        {this.props.description && <div className={styles.description}>
          {this.props.description}
        </div>}
      </div>
    );
  }

}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  when: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  description: PropTypes.string
};
