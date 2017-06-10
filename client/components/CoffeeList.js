const React = require('react');
import Coffee from './Coffee';

const CoffeeList = (props) => {
    //every element should return a single component
    //props.onBookClick()
    console.log(props.coffees);
    return (
      <div>
        {props.coffees.map(coffee =>
          <Coffee key={coffee.id}
          {...coffee}
          onClick={props.onBookClick}
          />
        )}
      </div>
  );

};
export default CoffeeList;
