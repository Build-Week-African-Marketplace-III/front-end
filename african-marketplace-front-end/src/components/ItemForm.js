import React, { useState } from "react";
import * as yup from "yup"; 
import axios from 'axios'
import {Form, Input, PrimaryButton} from './StyledComponents'


// Validation Logic for the item form
const formSchema = yup.object().shape({
    itemName: yup.string().min(2).required("Please name your item"),
    itemDescription: yup.string().required("Please describe your item"),
    itemPrice: yup.number().required("Please enter your item's price"),
    itemLocation: yup.string().required("Please select your item's location")
  });

export const ItemForm = (props) => {
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
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {console.log(error)})
      };
    
      // Form state updates as text is entered and the input changes
      const inputChange = (e) => {
        e.persist();
        validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
          setitemformState({ ...itemformState, [e.target.name]: value });
      };

      // Validation logic using yup and the yup schema
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
    <div className="form">
        

      
  {/* Updated to include the Form styled component */}
      <Form onSubmit={formSubmit} style={{marginTop: '200px'}}>
        <h1>Add a Listing</h1>
        
            <Input type="text" name="itemName" onChange={inputChange} value={itemformState.itemName} placeholder="Item Name"/>
            {errorState.itemName.length > 0 ? (
            <p>{errorState.itemName} </p>
          ) : null}
        
        
            <Input type="textarea" rows="4" name="itemDescription" onChange={inputChange} value={itemformState.itemDescription} placeholder="Item Description" />
            {errorState.itemDescription.length > 0 ? (
            <p>{errorState.itemDescription} </p>
          ) : null}
        
        
        
        <select name="itemLocation" value={itemformState.itemLocation} onChange={inputChange} placeholder="Market Location" > 
        
        
          <option value="Kenya">Kenya</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Burundi">Burundi</option>
        </select>
  
        
        <PrimaryButton type="submit" name="submit">Add Item </PrimaryButton> 
  
  
        
      </ Form>
    </div>
    )
  };


