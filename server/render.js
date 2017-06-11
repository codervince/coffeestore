const React = require('react');

import App from '../client/components/App';
import axios from 'axios';

console.log(App);
//converts react app intostring
const ReactDOMServer = require('react-dom/server');

const getData = (coffeeId, resData) =>{
  if (coffeeId){
    return {
      coffees: [respData],
      currentCoffeeId: coffeeId
    }
  }
  return resData;
};

const getUrl = (coffeeId) => {
  if(coffeeId){
    return `http://localhost:8080/api/coffees/${coffeeId}`;
  }
  //no coffeeId return list of all coffees
  return 'http://localhost:8080/api/coffees';
};


// <App /> is react create element
// const html = ReactDOMServer.renderToString(<App />);

export default (coffeeId) => {

  return axios.get(getUrl(coffeeId))
    .then(res => {
      const data = getData(coffeeId, res.data);
      return {
        markup: ReactDOMServer.renderToString(
          <App initialData={data}/>),
        data: data
      }
      // this.setState({coffees: res.data});
      // console.log(res.data);
    })


  return ReactDOMServer.renderToString(<App />);
};
