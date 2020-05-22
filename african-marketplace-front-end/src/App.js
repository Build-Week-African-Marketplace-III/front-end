import React from 'react';
import './App.css';
import ItemList from './components/ItemList'


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'
import * as yup from "yup";
import ItemForm from './components/ItemForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/itemform" component={ItemForm} />
        <ItemList />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
