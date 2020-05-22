import React from 'react';

// Kept the Props names matching to the names used in the ItemForm.js component

const Item = (props) => {
  return (
    <div className="item">
      <p>{props.itemName}</p>
      <p>{props.itemDescription}</p>
      <p>{props.itemPrice}</p>
      <p>{props.itemLocation}</p>
      {/* Not sure if this field will come back. */}
      {/* <p>{props.id}</p> */}
    </div>
  );
};

export default Item;
