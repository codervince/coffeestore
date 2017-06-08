const React = require('react');

import CoffeeList from './CoffeeList';

//format of presentational component
// const App = () => {
//   return (<h2> Hello Components! </h2>);
// };
//CoffeeList
//Coffee

//better syntax
class App extends React.Component {
  state = {answer:42};
  render() {
    return (
      <CoffeeList />
    );
  }
}

export default App;
