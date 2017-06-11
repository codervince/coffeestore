const React = require('react');

const CoffeeItem = (props) => {
  return (
    <div
      onClick= {() => props.onClick(props.id)}
    >
    <div> {props.title} </div>
    <div> {props.description} </div>
    <div> {props.price} </div>
    <div> {props.producer} </div>
    <div> {props.rating} </div>
    <a href="#" onClick={() => props.onRatingClick(props.id)}> Show Ratings </a>
    </div>

  );

};
export default CoffeeItem;
