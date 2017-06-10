const React = require('react');
import Coffee from './Coffee';

const CoffeeList = (props) => {
    //every element should return a single component
    console.log(props.coffees);
    return (
      <div>
        {props.coffees.map(coffee =>
          <Coffee key={coffee.id} {...coffee} />
        )}
      </div>
  );

};
export default CoffeeList;
