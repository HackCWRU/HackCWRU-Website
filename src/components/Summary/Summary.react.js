import React from 'react';
import styles from 'components/Summary/Summary.scss';

export default class Summary extends React.Component {

  render() {
    return (
    	<div className={styles.summary}>
        <div className={styles.date}>{'February 16th - 18th, 2018'}</div>
        <div className={styles.description}>
          HackCWRU brings together the brightest and most creative students to
          promote unrestricted technological innovation. Hosted at Case Western
          Reserve University, over 500 students will spend 36 hours bringing
          their imagination into the real world. Attendees will work with peers
          and mentors to create projects in one of six project tracks in the
          famous 7 story Sears Think[box] makerspace. Stay tuned for more on
          our track system! Don't be intimidated, however. You don't have to
          know what you are planning on doing to attend. If you are new to
          hackathons, we look forward to introducing you to a world of creation.
        </div>
    	</div>
    )
  }

}
