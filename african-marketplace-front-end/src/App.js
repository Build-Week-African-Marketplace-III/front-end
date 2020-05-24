import React from 'react';
import './App.css';


import { Switch, Route } from "react-router-dom";
import ItemForm from './components/ItemForm';


function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path="/itemform" component={ItemForm} />

        </Switch>
      
    </div>
  );
}

export default App;
