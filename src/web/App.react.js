import Button from 'components/Button/Button.react';
import Header from 'components/Header/Header.react';
import Logo from 'components/Logo/Logo.react';
import React from 'react';
import styles from 'web/App.scss';
import Summary from 'components/Summary/Summary.react';
import Event from 'components/Event/Event.react';

export default class App extends React.Component {

  render() {
    return (
      <div className={styles.landingPageContent}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.summary}>
            <Header>February 16th - 18th</Header>
            <Summary />
          </div>
          <div className={styles.callToActions}>
            <Button
             title="Register"
             externalLink="https://dashboard.hackry.io/register?hackathonId=NQZBtoIMDJ"
             color="darkBlue" />
            <Button
             title="Sponsor"
             externalLink="/sponsorship"
             color="red" />
          </div>
          <div className={styles.event}>
            <Event />
            
          </div>
        </div>
      </div>
    );
  }

}
