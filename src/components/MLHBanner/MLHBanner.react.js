import React from 'react';
import styles from 'components/MLHBanner/MLHBanner.scss';

export default class MLHBanner extends React.Component {

  render() {
    return (
      <div className={styles.MLHBanner}>
        <a id="mlh-trust-badge"
         href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=white" target="_blank">
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg" alt="Major League Hacking 2017 Hackathon Season"  />
            </a>
      </div>
    );
  }

}
