import App from './App.react';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

const render = (Component) => ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('root')
);

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App.react.js', () => {
    render(require('./App.react').default);
  });
}
