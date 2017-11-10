import Button from 'components/Button/Button.react';
import Header from 'components/Header/Header.react';
import Logo from 'components/Logo/Logo.react';
import React from 'react';
import styles from 'web/App.scss';
import Summary from 'components/Summary/Summary.react';
import Event from 'components/Event/Event.react';
import Tracks from 'components/Tracks/Tracks.react';

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
          <div className={styles.tracks}>
            <h1>Project Tracks</h1>
            <Tracks
                title = {"Civic"}
                image = {<img src="/assets/track_civic.png" />}
                description = {"The Civic track looks at the all levels of connected devices, from local IoT networks to municipal systems and civic datasets. Create a new device for your smart home, or create something that benefits the community.  "} />
            <Tracks
                title = {"Healthcare"}
                image = {<img src="/assets/track_healthcare.png" />}
                description = {"The healthcare track enables hackers to tackle problems relating to medicine, healthcare, and public health. Whether it is using public health data to analyze population wellness or using mobile technology to improve patient quality of and access to care, there has never been a better opportunity to match engineering solutions with real healthcare problems. If your background is in medicine or public health, partner with an engineer and inform the science behind your project!"} />
            <Tracks
                title = {"Fintech"}
                image = {<img src="/assets/track_fin1.png" />}
                description = {"The Fintech track is for hackers interested in the market and marketplace. Create a tool to help people make better financial decisions, or make a new algorithm to dominate the stock markets. Or finally figure out what “blockchain” is and what you can do with it. If you have a background in finance, work with an engineer and tackle an interesting problem together! "} />
            <Tracks
                title = {"Maker"}
                image = {<img src="/assets/track_maker.png" />}
                description = {"The Maker track enables hackers to unleash their inner maker. Invent something new, or just tinker with a thing to make it do something different. The only requirement is that you Did It Yourself--with your team of 4, of course. "} />
          </div>
        </div>
      </div>
    );
  }

}
