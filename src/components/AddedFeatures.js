import React from 'react';
import { connect } from "react-redux"

import AddedFeature from './AddedFeature';

import { addFeature } from "../actions/total" 

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return{
    features: state.car.features
  }
}

const mapDispatchToProps ={
  addFeature
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (AddedFeatures);
