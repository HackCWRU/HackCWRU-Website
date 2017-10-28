import React from 'react';
import styles from 'components/Header/Header.scss';

export default class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        {this.props.children}
      </div>
    )
  }

}
