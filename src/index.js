import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from "redux"
import { Provider } from "react-redux"

//Reducers
import {reducer as totalReducer } from "./reducers/total"

//Style Imports
import 'bulma/css/bulma.css';
import './styles.scss';



const store = createStore(totalReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, rootElement);
