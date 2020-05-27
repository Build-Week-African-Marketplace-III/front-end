// Temporary location for all my logic and my API call to display Item componenet with Props
import React, { useState, useEffect } from "react";
import { ItemDiv, SmallButton } from './StyledComponents';
import axios from "axios";
import Item from "./Item";

export const ItemList = (props) => {
  let [itemListState, setitemListState] = useState([]);

  const backendAPI = "https://sauti-africa.herokuapp.com/api/items";

  
  useEffect(() => {
    axios
          .get(backendAPI)
          .then((response) => {
            console.log("Logged", response);
            setitemListState(response.data);
          })
          .catch((error) => console.log(error));
  },[])
  

  return (
    <ItemDiv style={{ marginTop: '200px'}}>
      <h1>Market Listings</h1>
      {itemListState.map((item) => <Item itemName={item.name} key={item.id} itemDescription={item.description} itemPrice={item.price} itemLocation={item.location}/>
      )}
      <SmallButton onClick={()=>{props.history.push('/item-form')}}>Add Item</SmallButton>
    </ ItemDiv>
  );
};

