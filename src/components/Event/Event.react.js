import React from 'react';
import styles from 'components/Event/Event.scss';

export default class Event extends React.Component {

  render() {
    return (
      <div>
        <div className={styles.Event}>
            <h1> The Key Details </h1>
            <div className={styles.title}>{this.props.name}</div>
            <div className={styles.when}><strong>When: </strong>{this.props.when}</div>
            <div className={styles.where}><strong>Where: </strong>{this.props.where}</div>
            <div className={styles.about}><strong>About: </strong>{this.props.about}</div>
        </div>
     </div>
    );
  }

}
