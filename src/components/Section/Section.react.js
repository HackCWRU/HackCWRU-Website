import PropTypes from 'prop-types';
import React from 'react';
import styles from 'components/Section/Section.scss';

export default class Section extends React.Component {
  render() {
    return (
      <div className={styles.section} id={this.props.scrollId}>
        {this.props.title && <div className={styles.title}>
          {this.props.title}
        </div>}
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }

}

Section.propTypes = {
  scrollId: PropTypes.string,
  title: PropTypes.string
};
