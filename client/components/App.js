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
  state = {coffees: this.props.initialData };

  componentDidMount() {
    // axios.get('http://localhost:8080/api/coffees')
    //   .then(res => {
    //     this.setState({coffees: res.data});
    //     console.log(res.data);
    //   })
  }

  //app component telling list component to use some data
  render() {
    // debugger
    return (
      <CoffeeList coffees={this.state.coffees} />
    );
  }
}

export default App;
