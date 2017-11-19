import PropTypes from 'prop-types';
import React from 'react';
import styles from 'components/Navbar/Navbar.scss';
import { Link } from 'react-scroll'

export default class Navbar extends React.Component {

  render() {
    return (
      <div className={styles.navbar}>
        {(this.props.items || []).map((item, index) => {
          return (
            <div
             key={index}
             className={styles.item}>
              <Link
               to={item.scrollId}
               spy
               offset={-24}
               smooth
               duration={500}>
                {item.name}
              </Link>
            </div>
          )
        })}
      </div>
    );
  }

}

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    scrollId: PropTypes.string
  }))
};
