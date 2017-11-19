import PropTypes from 'prop-types';
import React from 'react';
import styles from 'components/Track/Track.scss';

export default class Track extends React.Component {

  render() {
    return (
    	<div className={styles.track}>
        <div className={styles.image}>
          <img src={this.props.image}/>
        </div>
        <div className={styles.nameAndDescription}>
          <div className={styles.name}>
            {this.props.name}
          </div>
          <div className={styles.description}>
            {this.props.description}
          </div>
        </div>
    	</div>
    )
  }

}

Track.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
