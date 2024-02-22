import React, {useEffect, useState} from "react";
import Product from "./Product";
import FilterProducts from "./FilterProducts";
import '../styling/compare.css';
import { useNavigate } from 'react-router-dom';


// ======================================================================================== //
// - Author: Arnold
// - Date: 14/02/2024
// - Displays a table of products by passing props to product component. 
// - Filters and sorts displayed data by obtaining callbacks from FilterProducts component. 
// - Parent of Product.js, and FilterProducts.js || Child to App.js
// ======================================================================================== //


function Comparison(){
    
    //======== Fetch data from db.json
    const [productsData, setProductsData] = useState([])
    const [CATEGORIES, setCATEGORIES] = useState([])

    useEffect(
        ()=> {
        fetch("http://localhost:3000/easyShopItems")
        .then((response)=> response.json())
        .then((data)=> {
            setProductsData(data);
            setCATEGORIES(Array.from(new Set(data.map(item => item.category)))); 
            })                                                
        }, []);                                                                  
    //==================================


    //====== FilterProducts.js: functions and props
    //Product display catalogue
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search1, setSearch1] = useState('');

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    function onSearchChange1(event) {
        setSearch1(event.target.value);    
    }

    // === This is the sort function
    function compare( a, b ) {
        if ( a.price < b.price ){
            return -1;
        }
        if ( a.price > b.price ){
            return 1;
        }
        return 0;
    }

    function onSortChange(){
        const sortedArray = [...productsData].sort(compare);
        setProductsData(sortedArray); 
    }

    const itemsToDisplay = productsData.filter((item) => {
      //if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    }).filter((item) => {  
        return item.title.toLowerCase().includes(search1.toLowerCase())
    })  
    // ==================================================  


    // product selection
    //=== onCheck: Obtain and display products for comparison onCheck
    const [checkedProducts, setCheckedProducts] = useState([]);
    const [comparisonData, setComparisonData] = useState([]);   

    function onChecked(event, title, amount, image){  
    
        let selectedObj;
    
        // check if two items selected on checking a third item and alert user
        if (comparisonData.length === 2 && event.target.checked){
          alert("Only 2 Items Allowed!")
          event.target.checked = false;
        }else if (comparisonData.length < 2 && event.target.checked){   // if checked    
    
          selectedObj= {        // obtain data of the checked item
            "title": title, 
            "amount": amount,
            "image": image
          }
    
          event.target.checked = true;
    
          setCheckedProducts([...checkedProducts, selectedObj]); 
          const compArray = [...comparisonData, selectedObj.title]
          setComparisonData(compArray);        
            
        }else if (!event.target.checked){                             // if unchecked
          // update the checkedProducts and comparisonData array when we uncheck box
          let removeIndex = checkedProducts.map(item => item.title).indexOf(title);
          checkedProducts.splice(removeIndex, 1)
          comparisonData.splice(removeIndex, 1)
    
          setCheckedProducts([...checkedProducts])
          setComparisonData([...comparisonData])
        }        
    }
    

    // The two checked products to be displayed
    let checkedProducts1 = checkedProducts;
    let checkedProducts2 = checkedProducts;  
    if (checkedProducts.length === 1){
        checkedProducts1 = checkedProducts[0]
    }else if(checkedProducts.length === 2){
        checkedProducts1 = checkedProducts[0]
        checkedProducts2 = checkedProducts[1]
    }


    // Comparison display
    // ===OnClick: Obtain product data for comparison onClicking compare button
    const navigate = useNavigate();
  
    const handleCompare = () => {
  
      let dataArray = [];
  
      if (comparisonData.length < 2){
        alert("Please add 2 items!")
        return;     
      }else{
        // Obtain description data of the checked items
        let checkedArray1 = productsData.filter(function (el) {
          return el.title === comparisonData[0]
        });
        let checkedArray2 = productsData.filter(function (el) {
          return el.title === comparisonData[1]
        });
        
        dataArray = [...checkedArray1, ...checkedArray2];     
      }
      navigate('/Comparison/CompareDetails', {state:{...dataArray}})    
    }
    // ==================================================  
    

    return(
        <>
        <div className="compareProducts">            
            <hr/>
            <FilterProducts 
            onSortChange={onSortChange} 
            search1={search1} 
            onSearchChange1={onSearchChange1} 
            onCategoryChange={handleCategoryChange} 
            categories={CATEGORIES} 
            checkedProducts1={checkedProducts1}
            checkedProducts2={checkedProducts2}
            onCompare={handleCompare} 
            />            
            <hr/>

            {/* display a table of products using Product component */}
            <ul className="products">
                {itemsToDisplay.map((item, index) => (
                <li key={index} className="product">
                    <Product image={item.image} title={item.title} amount={item.price} toggleCheckbox={onChecked} />
                </li>
                ))}
            </ul>

        </div>
        </>
        )
}

export default Comparison;