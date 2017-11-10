import React from 'react';
import styles from 'components/Tracks/Tracks.scss';

export default class Tracks extends React.Component {

  render() {
    return (
    	<div className={styles.tracks}>
            <div className={styles.title}>{this.props.title}</div>
            <div>{this.props.image}</div>
            <div className={styles.desc}>{this.props.description}</div>
    	</div>
    )
  }

}
