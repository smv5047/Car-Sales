import React from 'react';
import { connect } from "react-redux"

const Header = props => {
  console.log(props.price)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

function mapStateToProps(state){
  return {
    price: state.car.price,
    image: state.car.image,
    name: state.car.name,
  }
}

export default connect(
    mapStateToProps
)(Header);
