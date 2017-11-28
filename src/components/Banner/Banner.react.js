import React from 'react';
import styles from 'components/Banner/Banner.scss';

export default class Banner extends React.Component {

  render() {
    return (
      <div className={styles.banner}>
        {this.props.children}
      </div>
    )
  }

}
