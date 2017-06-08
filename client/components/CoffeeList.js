const React = require('react');
import Coffee from './Coffee';

const CoffeeList = (props) => {
    //every element should return a single component
    return (
      <div>
        <Coffee />
        <Coffee />
        <Coffee />
      </div>
  );

};
export default CoffeeList;
