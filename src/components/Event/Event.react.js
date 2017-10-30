import React from 'react';
import styles from 'components/Event/Event.scss';

export default class Event extends React.Component {

  render() {
    return (
      <div>
        <div className={styles.Event}>
            <h1> The Key Details </h1>

            <p> <span className={styles.details}>Who:</span> From Designers to Programmers, everyone is welcome!  </p>
            <p> <span className={styles.details}>What:</span> 36 hours of hands on, real world technical creation </p>
            <p> <span className={styles.details}>When:</span> February 16-18, 2018 </p>
            <p> <span className={styles.details}>Where:</span> The famous 7 story Sears Think[box] at Case Western Reserve University </p>
            <p> <span className={styles.details}>Why:</span> To code, build, and learn (Also to get lots and lots of SWAG) </p>

        </div>
     </div>
    );
  }

}
