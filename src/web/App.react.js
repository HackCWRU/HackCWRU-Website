import Banner from 'components/Banner/Banner.react';
import Button from 'components/Button/Button.react';
import Event from 'components/Event/Event.react';
import MLHBanner from 'components/MLHBanner/MLHBanner.react';
import FAQ from 'components/FAQ/FAQ.react';
import Hackry from 'hackry';
import Logo from 'components/Logo/Logo.react';
import Navbar from 'components/Navbar/Navbar.react';
import React from 'react';
import styles from 'web/App.scss';
import Summary from 'components/Summary/Summary.react';
import Section from 'components/Section/Section.react.js'
import Track from 'components/Track/Track.react';
import tracks from 'data/tracks';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.hackry = new Hackry('NQZBtoIMDJ');
    this.state = {
      faqs: [],
      events: []
    };
  }

  componentWillMount() {
    this.hackry.faqs((faqs) => {
      this.setState({
        faqs: faqs
      });
    });

    this.hackry.events((events) => {
      this.setState({
        events: events
      });
    });
  }

  renderComingSoon() {
    return (
      <div className={styles.comingSoon}>Coming soon...</div>
    )
  }

  render() {
    return (
      <div>
      <MLHBanner/>
      <div className={styles.landingPageContent}>

        <div className={styles.container}>

          <div className={styles.navbar}>
            <Navbar
             items={[{
               name: 'Tracks',
               scrollId: 'tracks'
             }, {
               name: 'FAQs',
               scrollId: 'faqs'
             }, {
               name: 'Schedule',
               scrollId: 'schedule'
             }]} />
          </div>
          <div>
          <Logo />
          <Section>
            <div className={styles.summary}>
              <Summary />
            </div>
            <div className={styles.callToActions}>
              <Button
               title='Registration Coming Soon'
               color='darkBlue' />
              <Button
               title='Sponsor'
               externalLink='/sponsorship'
               color='red' />
            </div>
          </Section>
          <Section
           title='Tracks'
           scrollId='tracks'
           description={'There\'s only one thing we like more than working on projects, and that\'s working on projects that work in the real world. That\'s why we\'ve created a unique track system for hackCWRU V.'}>
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
          <Section title='FAQs' scrollId='faqs'>
            {this.state.faqs.length > 0 ? this.state.faqs.map((faq, index) => {
              return (
                <FAQ
                 key={index}
                 question={faq.question}
                 answer={faq.answer} />
              )
            }) : this.renderComingSoon()}
          </Section>
          <Section title='Schedule' scrollId='schedule'>
            {this.state.events.length > 0 ? this.state.events.map((event, index) => {
              return (
                <Event
                 key={index}
                 name={event.name}
                 when='idk'
                 where={event.location}
                 description={event.description} />
              )
            }) : this.renderComingSoon()}
          </Section>
          </div>
        </div>
      </div>
      </div>
    );
  }

}
