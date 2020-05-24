// Temporary location for all my logic and my API call to display Item componenet with Props

import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const MainComponent = () => {
  let [itemListState, setitemListState] = useState([]);

  const backendAPI = "https://swapi.dev/api/people";

  
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
      {itemListState.map((item) => <Item itemName={item.name} key={item.name}/>)}
    </>
  );
};

export default MainComponent;