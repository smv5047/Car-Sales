import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from "react-redux"
import { addFeature, removeFeature} from "./actions/total" 


const App = () => {
 



  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total/>
      </div>
    </div>
  );
};


function mapStateToProps(state){
  
  return{
    features: state.car.features
    
  }
}

const mapDispatchToProps ={
  addFeature,
  removeFeature
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
