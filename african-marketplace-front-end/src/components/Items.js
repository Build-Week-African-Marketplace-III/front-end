import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as yup from "yup"; 
import axios from 'axios'


// Validation Logic for the item form
const formSchema = yup.object().shape({
    itemName: yup.string().min(2).required("Please name your item"),
    itemDescription: yup.string().required("Please describe your item"),
    itemPrice: yup.number().required("Please enter your item's price"),
    itemLocation: yup.string().required("Please select your item's location")
  });

const ItemsForm = (props) => {
    const [itemformState, setitemformState] = useState({
        itemName: "",
        itemDescription: "",
        itemPrice: "",
        itemLocation: ""
      });
    
      const [errorState, seterrorState] = useState({
        itemName: "",
        itemDescription: "",
        itemPrice: "",
        itemLocation: ""
      });
      
       

    //   Backend API URL here for the location to POST items to
    // const backendAPIURL = "https://reqres.in/api/users";

      const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        axios.post("backendAPIURL", itemformState)
        .then(response => {console.log(response.data)})
        .catch(error => {console.log(error)})
      };
    
      const inputChange = (e) => {
        e.persist();
        validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
          setitemformState({ ...itemformState, [e.target.name]: value });
      };


      const validate = (e) => {  
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then((valid) => {
            seterrorState({
              ...errorState,
              [e.target.name]: "",
            });
          })
          .catch((err) => {
            console.log(err.errors);
            seterrorState({ ...errorState, [e.target.name]: err.errors[0] });
          });
      };
    return (
    <div className="pizza">
        
      <h1>Add your new item</h1>
      
  
      <form onSubmit={formSubmit}>
     
        <label htmlFor="itemName">Item Name
            <input type="text" name="itemName" onChange={inputChange} value={itemformState.itemName} />
            {errorState.itemName.length > 0 ? (
            <p>{errorState.itemName} </p>
          ) : null}
        </label>
        <br />
        <label htmlFor="itemDescription">Item Description
            <input type="textarea" rows="4" name="itemDescription" onChange={inputChange} value={itemformState.itemDescription} />
            {errorState.itemDescription.length > 0 ? (
            <p>{errorState.itemDescription} </p>
          ) : null}
          <br />
        </label>
        <br />
        <label htmlFor="itemDescription" />Item's Market Location
        <br />
        <select name="itemLocation" value={itemformState.itemLocation} onChange={inputChange} > 
        
        <br />
          <option>Kenya</option>
          <option>Ethiopia</option>
          <option>Rwanda</option>
          <option>Burundi</option>
        </select>
  
        <br />
    
        <label htmlFor="AddItem">Add Item Listing 
        <br />
        <input type="submit" name="submit" />
        </label>
  
        
      </form>
    </div>
    )
  };


export default ItemsForm;