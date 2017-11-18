import React from 'react';
import styles from 'components/Section/Section.scss';

export default class Section extends React.Component {
  render() {
    return (
      <div>
      <div id={this.props.id}>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
      </div>
    )
  }

}
