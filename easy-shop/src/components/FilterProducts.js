import React from "react";
// import '../../node_modules/font-awesome/css/font-awesome.min.css'; // install this


// ============================================================================= //
// - Author: Arnold
// - Date: 14/02/2024
// - Filter products by typing into the search bar. Only products with a 
//   title matching the search term will be shown in the product catalogue    
// - Sorts products based on price 
// ============================================================================= //

function FilterProducts({ checkedProducts1, checkedProducts2, categories, onCategoryChange, search1, onSearchChange1, onSortChange, onCompare, selectedCategory }) {

  return (
    <>
    <div className="FilterProducts">
      
      <div className="sortBtn">
        <button onClick={onSortChange} style={{color: "#71F25C", fontSize: "20px"}} > Sort <i className="fa fa-sort"></i></button>
      </div>
      
      <div className="categoryOpt">
        <select name="category" value={selectedCategory} onChange={onCategoryChange}>
          {/* <option value="All">All Categories</option> */}
          {categories.map((item, index)=> (
          <option key={index} value={item}>{item}</option>))
          }
        </select>
      </div>
 
      <div className="searchProduct">
        <input type="text" name="search" placeholder="Search..." value={search1} onChange={onSearchChange1}/>      
      </div>

      <div className="searchProduct">
        <p>Product 1 </p>
      </div>

      <div className="add">
        <div className="addProduct">
          <h2>&ensp;&ensp; VS &ensp;&ensp;</h2>
        </div>
          <button className="compare" onClick={(event)=> onCompare(event)}>Compare</button>
      </div>

      <div className="searchProduct">
        <p>Product 2 </p>
      </div>

    </div>

    <div className="checkedForDisplay">
      {/* product 1 */}
      <div className="checkedProductCard">
        <div className="displayNone" style={{display:"block"}}>
          <div className="product">
            <div className="productImage">
              <img src={checkedProducts1.image} alt="productImage" className="image"/>
            </div>
            <p className="label">{checkedProducts1.title}</p>
            <div className="priceSelect">
              <div className="text">Price: {checkedProducts1.amount}</div>
            </div>
          </div>
        </div>
      </div>

      {/* product 2 */}
      <div className="checkedProductCard">
        <div className="displayNone" style={{display:"block"}}>
          <div className="product">
            <div className="productImage">
              <img src={checkedProducts2.image} alt="productImage" className="image"/>
            </div>
            <p className="label">{checkedProducts2.title}</p>
            <div className="priceSelect">
              <div className="text">Price: {checkedProducts2.amount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default FilterProducts;
