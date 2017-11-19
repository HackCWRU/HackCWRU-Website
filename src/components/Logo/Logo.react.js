import React from 'react';
import styles from 'components/Logo/Logo.scss';

export default class Logo extends React.Component {

  render() {
    return (
      <div className={styles.logo}>
        <img src="/assets/logo.png" />
      </div>
    );
  }

}
