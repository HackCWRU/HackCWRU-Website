import React from 'react';
import styles from 'components/Summary/Summary.scss';

export default class Summary extends React.Component {

  render() {
    return (
    	<div className={styles.summary}>
        <div className={styles.date}>{'February 16th - 18th, 2018'}</div>
        <div className={styles.description}>
          hackCWRU brings together the brightest and most creative students to
          promote unrestricted technological innovation.
          <div className={styles.spacer}></div>
          Hosted at Case Western Reserve University, over 350 students will
          spend 36 hours bringing their imagination into the real world.
          Attendees will work with peers and mentors to create projects in
          one of four project tracks.
          <div className={styles.spacer}></div>
          Don't be intimidated, however.  You don't have to know what you're
          doing to attend.  If you are new to hackathons, we look forward to
          introducing you to a world of creation.
          Lastly, at hackCWRU we abide by and enforce <a href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH's Code of Conduct</a>.
        </div>
    	</div>
    )
  }

}
