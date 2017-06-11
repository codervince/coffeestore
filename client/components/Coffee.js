const React = require('react');

const Coffee = (props) => {
  return (
    <div>
      <h2> Coffee Page </h2>
      <div> {props.title} </div>
      <div> {props.description} </div>
      <div> {props.price} </div>
      <div> {props.producer} </div>
      <div> {props.rating} </div>
    </div>
  );

};
export default Coffee;
