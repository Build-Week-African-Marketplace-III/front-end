import React, { useState } from "react";
import * as yup from "yup"; 
// import axios from 'axios'
import { axiosWithAuth } from "../axiosWithAuth";
import {Form, Input, PrimaryButton} from './StyledComponents'


// Validation Logic for the item form
const formSchema = yup.object().shape({
    name: yup.string().min(2).required("Please name your item"),
    description: yup.string().required("Please describe your item"),
    price: yup.number().required("Please enter your item's price"),
    location: yup.string().required("Please select your item's location")
  });

export const ItemForm = (props) => {
    const [itemformState, setitemformState] = useState({
      name: "",
      description: "",
      price: "",
      location: ""
      });
    
      const [errorState, seterrorState] = useState({
        name: "",
        description: "",
        price: "",
        location: ""
      });

    //   Backend API URL here for the location to POST items to
    const backendAPIURL = "https://sauti-africa.herokuapp.com/api/items";

      const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        axiosWithAuth()
        .post(backendAPIURL, itemformState)
        .then(response => {
          console.log(response.data)
          props.history.push('/');
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
        
            <Input type="text" name="name" onChange={inputChange} value={itemformState.name} placeholder="Item Name"/>
            {errorState.name.length > 0 ? (
            <p>{errorState.name} </p>
          ) : null}
        
        
            <Input type="textarea" rows="4" name="description" onChange={inputChange} value={itemformState.description} placeholder="Item Description" />
            {errorState.description.length > 0 ? (
            <p>{errorState.description} </p>
          ) : null}

            <Input type="textarea" name="price" onChange={inputChange} value={itemformState.price} placeholder="Item Price" />
            {errorState.price.length > 0 ? (
            <p>{errorState.price} </p>
          ) : null}
        
        
        
        <select name="location" value={itemformState.location} onChange={inputChange} placeholder="Market Location" > 
        
          <option value="">Select Your Market Location</option>
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


