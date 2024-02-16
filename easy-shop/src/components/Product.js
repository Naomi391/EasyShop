import React from "react";

// ============================================================ //
// - Author: Arnold
// - Date: 14/02/2024
// Displays each product card
// Contains checkbox to add a product to comparison table
// ============================================================ //


  
function Product({image, title, amount, toggleCheckbox}) {


  return (
      <div className="product">
        <div className="productImage">
          <img src={image} alt="productImage" className="image"/>
        </div>
        <p className="label">{title}</p>
        <div className="priceSelect">
          <div className="text">Price: {amount}</div>
          <label className="form-control">
            Select &ensp;
            <input type="checkbox" className="checkbx" name="checkbox" onChange={(event) => toggleCheckbox(event, title, amount, image)} />
          </label>
          </div>
      </div>
    );
}
  
export default Product;
