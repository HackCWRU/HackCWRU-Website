import Button from 'components/Button/Button.react';
import Header from 'components/Header/Header.react';
import Logo from 'components/Logo/Logo.react';
import React from 'react';
import styles from 'web/App.scss';
import Summary from 'components/Summary/Summary.react';
import Section from 'components/Section/Section.react.js'
import Event from 'components/Event/Event.react';
import Track from 'components/Track/Track.react';
import tracks from 'data/tracks';
import FAQ from 'components/FAQ/FAQ.react';

export default class App extends React.Component {

  render() {
    return (
      <div className={styles.landingPageContent}>
        <div className={styles.container}>
          <Logo />
          <Section>
            <div className={styles.summary}>
              <Header>February 16th - 18th</Header>
              <Summary />
            </div>
            <div className={styles.callToActions}>
              <Button
               title='register'
               externalLink='https://dashboard.hackry.io/register?hackathonId=NQZBtoIMDJ'
               color='darkBlue' />
              <Button
               title='Sponsor'
               externalLink='/sponsorship'
               color='red' />
            </div>
          </Section>
          <Section title='Tracks' scrollId='tracks'>
            {Object.keys(tracks).map((name, index) => {
              const track = tracks[name.toLowerCase()];
              return (
                <Track
                 key={index}
                 name={name.charAt(0).toUpperCase() + name.slice(1)}
                 image={track.image}
                 description={track.description} />
              )
            })}
          </Section>
        </div>
      </div>
    );
  }

}
