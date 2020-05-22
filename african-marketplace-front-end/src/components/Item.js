import React from 'react';

// Kept the Props names matching to the names used in the ItemForm.js component

const Item = (props) => {
  return (
    <div className="item">
      <h1>{props.itemName}</h1>
      <p>{props.itemDescription}</p>
      <p>{props.itemPrice}</p>
      <p>{props.itemLocation}</p>
    </div>
  );
};

export default Item;
