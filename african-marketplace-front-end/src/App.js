import React from 'react';
import './App.css';
import ItemsForm from './components/ItemForm';
import Item from './components/Item'
import MainComponent from './components/MainComponent'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'
import * as yup from "yup";


function App() {
  return (
    <div className="App">
      <Router>
        <MainComponent />
      <ItemsForm />
      </Router>
      
    </div>
  );
}

export default App;
