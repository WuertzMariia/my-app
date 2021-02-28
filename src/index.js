

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store.js'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";


export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
   
      <Provider store={store}>
      <App store={store}/>
      </Provider>
   
    </BrowserRouter>,
    document.getElementById('root')
  );
  reportWebVitals();
}
rerenderEntireTree(); 
