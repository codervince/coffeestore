const React = require('react');
import CoffeeItem from './CoffeeItem';

const CoffeeList = (props) => {
    return (
      <div>
        {props.coffees.map(coffee =>
          <CoffeeItem key={coffee.id}
          onClick= {props.onTitleClick}
          rating={props.calcRatingForBook(coffee.id)}
          onRatingClick={props.onBookClick}
          {...coffee}
          />
        )}
      </div>
  );

};
export default CoffeeList;
