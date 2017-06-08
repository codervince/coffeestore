const React = require('react');

import App from '../client/components/App';

console.log(App);
//converts react app intostring
const ReactDOMServer = require('react-dom/server');

// <App /> is react create element
// const html = ReactDOMServer.renderToString(<App />);

export default () => {
  return ReactDOMServer.renderToString(<App />);
};
