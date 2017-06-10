const React = require('react');

const Coffee = (props) => {
  return (
    <div
      onClick= {() => props.onClick(props.id)}
    >
    <div> {props.title} </div>
    <div> {props.description} </div>
    <div> {props.price} </div>
    <div> {props.producer} </div>
    </div>

  );

};
export default Coffee;
