const React = require('react');

import App from '../client/components/App';
import axios from 'axios';

console.log(App);
//converts react app intostring
const ReactDOMServer = require('react-dom/server');

// <App /> is react create element
// const html = ReactDOMServer.renderToString(<App />);

export default () => {

  return axios.get('http://localhost:8080/api/coffees')
    .then(res => {
      return {
        markup: ReactDOMServer.renderToString(
          <App initialData={res.data}/>),
        data: res.data
      }
      // this.setState({coffees: res.data});
      // console.log(res.data);
    })


  return ReactDOMServer.renderToString(<App />);
};
