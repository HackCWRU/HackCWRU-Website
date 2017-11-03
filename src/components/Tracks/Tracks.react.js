import React from 'react';
import styles from 'components/Tracks/Tracks.scss';

export default class Tracks extends React.Component {

  render() {
    return (
    	<div className={styles.tracks}>
        <h1> Project Tracks </h1>
        <table>
            <tr>
                <td><img src="/assets/track_civic.png" /> </td>
                <td>
                <h2> Civic </h2>
                <p>The Civic track looks at the all levels of connected devices,
                 from local IoT networks to municipal systems and civic
                 datasets. Create a new device for your smart home, or create
                 something that benefits the community.  </p>
                </td>
            </tr>
            <tr>
                <td><img src="/assets/track_fin1.png" /> </td>
                <td>
                    <h2>Fintech </h2>
                    <p>The Fintech track is for hackers interested in the market
                    and marketplace. Create a tool to help people make better
                    financial decisions, or make a new algorithm to dominate
                    the stock markets. Or finally figure out what “blockchain”
                    is and what you can do with it. If you have a background in
                    finance, work with an engineer and tackle an interesting
                    problem together!  </p>
                </td>
            </tr>
            <tr>
                <td><img src="/assets/track_healthcare.png" /> </td>
                <td>
                    <h2>Healthcare </h2>
                    <p> The healthcare track enables hackers to tackle problems
                    relating to medicine, healthcare, and public health. Whether
                     it is using public health data to analyze population
                     wellness or using mobile technology to improve patient
                     quality of and access to care, there has never been a
                     better opportunity to match engineering solutions with
                     real healthcare problems. If your background is in
                     medicine or public health, partner with an engineer and
                     inform the science behind your project!   </p>
                </td>
            </tr>
            <tr>
                <td><img src="/assets/track_maker.png" /> </td>
                <td>
                    <h2>Maker </h2>
                    <p>The Maker track enables hackers to unleash their inner
                    maker. Invent something new, or just tinker with a thing to
                    make it do something different. The only requirement is that
                    you Did It Yourself--with your team of 4, of course.  </p>
                </td>
            </tr>
        </table>
    	</div>
    )
  }

}
