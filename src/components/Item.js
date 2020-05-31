import React from 'react';
import { ItemCard } from './StyledComponents';
// Kept the Props names matching to the names used in the ItemForm.js component

const Item = (props) => {
  return (
    <ItemCard className="item">
      <h3>{props.itemName}</h3>
      <p>Description: {props.itemDescription}</p>
      <p>Price: {props.itemPrice}</p>
      <p>Market Location: {props.itemLocation}</p>
      {/* Not sure if this field will come back. */}
      {/* <p>{props.id}</p> */}
    </ItemCard>
  );
};

export default Item;
