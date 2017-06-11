const React = require('react');

import CoffeeList from './CoffeeList';
import Coffee from './Coffee';
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
  //MINIMIZE WHAT PUT ON STATE
  state = {
    coffees: this.props.initialData,
    ratings: {},
    currentCoffeeId: null,
   };

  // componentDidMount() {
  //   // axios.get('http://localhost:8080/api/coffees')
  //   //   .then(res => {
  //   //     this.setState({coffees: res.data});
  //   //     console.log(res.data);
  //   //   })
  // }
  fetchRatingForBook = (coffeeId) => {
    //efore going to API check if rating already in state
    if(this.state.ratings[coffeeId]) {return;}

    axios.get(`http://localhost:8080/api/coffees/${coffeeId}/ratings`)
      .then(res=> {
        //returns previous state NEED THIS TO PREVENT RACE CONDITIONS
        this.setState((prevState) => {
          const currentRatings = prevState.ratings;
          currentRatings[coffeeId] = res.data;
          return {ratings: currentRatings};
        })
        // console.log(res.data);
      })

    // console.log(coffeeId);
  }
  //
  showCoffeePage = (coffeeId) => {
    //before show single coffee push page to history
    history.pushState(
      {currentCoffeeId: coffeeId},
      "",
      `books/${coffeeId}`
    );
    //replace list with single coffee
    this.setState({currentCoffeeId:coffeeId});

  }

  calcRatingForBook = (coffeeId)=> {
    const ratings = this.state.ratings[coffeeId];
    if(!ratings || ratings.length===0) {return;} //no data
    return  ratings.reduce((acc, review)=> {
      return acc+ review.rating;
    },0) / ratings.length;
  }
  //app component telling list component to use some data
  render() {
    // return a single coffee or a coffelist depending on if
    // state set via click
    return (
      <div>
      {
        this.state.currentCoffeeId ?
        //need this coz array
          <Coffee { ...this.state.coffees.find(item => item.id === this.state.currentCoffeeId)}/> :
          // <Coffee { ...this.state.coffees[this.state.currentCoffeeId]}/> :
          <CoffeeList
          onTitleClick={this.showCoffeePage}
          coffees={this.state.coffees}
          calcRatingForBook={this.calcRatingForBook}
          onBookClick={this.fetchRatingForBook}/>
      }
      </div>
    );
  }
}

export default App;
