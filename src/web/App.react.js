import React from 'react';
import Summary from 'components/Summary/Summary.react';
import Button from 'components/Button/Button.react';
import Logo from 'components/Logo/Logo.react';
export default class App extends React.Component {

  render() {
    return (
      <div>
        <Logo />
      	<Summary />
        <div>
          <Button
           title="Register"
           externalLink="https://dashboard.hackry.io/register?hackathonId=NQZBtoIMDJ"/>
          <Button
           title="Sponsor"
           externalLink="/sponsorship" />
        </div>
      </div>
    );
  }

}
