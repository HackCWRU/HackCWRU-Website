import React from 'react';

export default class Button extends React.Component {

  render() {
    return (
      <div>
        <form action="http://hack.cwru.edu">
          <input type="submit" value="Register!" />
        </form>
      </div>
    );
  }

}
