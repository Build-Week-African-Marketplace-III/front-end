// Temporary location for all my logic and my API call to display Item componenet with Props
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const ItemList = () => {
  let [itemListState, setitemListState] = useState([]);

  const backendAPI = "https://sauti-africa.herokuapp.com/api/items";

  
  useEffect(() => {
    axios
          .get(backendAPI)
          .then((response) => {
            console.log("Logged", response.data.results);
            setitemListState(response.data.results);
          })
          .catch((error) => console.log(error));
  },[])
  

  return (
    <>
      <h1>Item List</h1>
      <Link to="/itemform">
        <h2>Add New Item Test</h2>
      </Link>
      {itemListState.map((item) => <Item itemName={item.name} key={item.name}/>
      )}
    </>
  );
};

export default ItemList;
