const React = require('react');

import CoffeeList from './CoffeeList';

//ajax library
import axios from 'axios'; //can also use fetch?

//format of presentational component
// const App = () => {
//   return (<h2> Hello Components! </h2>);
// };
//CoffeeList
//Coffee

//better syntax
class App extends React.Component {
  state = {
    coffees: this.props.initialData,
    ratings: {}
   };

  // componentDidMount() {
  //   // axios.get('http://localhost:8080/api/coffees')
  //   //   .then(res => {
  //   //     this.setState({coffees: res.data});
  //   //     console.log(res.data);
  //   //   })
  // }
  fetchRatingForBook = (bookId) => {
    //efore going to API check if rating already in state
    if(this.state.ratings[bookId]) {return;}

    axios.get(`http://localhost:8080/api/coffees/${bookId}/ratings`)
      .then(res=> {
        //returns previous state NEED THIS TO PREVENT RACE CONDITIONS
        this.setState((prevState) => {
          const currentRatings = prevState.ratings;
          currentRatings[bookId] = res.data;
          return {ratings: currentRatings};
        })
        console.log(res.data);
      })

    console.log(bookId);
  }

  calcRatingForBook = (bookId)=> {
    const ratings = this.state.ratings[bookId];
    if(!ratings || ratings.length===0) {return;} //no data
    return  ratings.reduce((acc, review)=> {
      return acc+ review.rating;
    },0) / ratings.length;
  }
  //app component telling list component to use some data
  render() {
    // debugger
    return (
      <CoffeeList coffees={this.state.coffees}
      calcRatingForBook={this.calcRatingForBook}
      onBookClick={this.fetchRatingForBook}/>
    );
  }
}

export default App;
