import React, {useEffect, useState} from "react";
import Product from "./Product";
import FilterProducts from "./FilterProducts";
import '../styling/compare.css';


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
    const [search2, setSearch2] = useState('');

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    function onSearchChange1(event) {
        setSearch1(event.target.value);    
    }

    function onSearchChange2(event) {
        setSearch2(event.target.value);    
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

    function onSortChange(event){
        const sortedArray = [...productsData].sort(compare);
        setProductsData(sortedArray); 
    }


    const itemsToDisplay = productsData.filter((item) => {
    //if (selectedCategory === "All") return true;
    if (selectedCategory === item.category){
        return item.category === selectedCategory;}
    }).filter((item) => {  
        return item.title.toLowerCase().includes(search1.toLowerCase())
    }).filter((item) => {  
        return item.title.toLowerCase().includes(search2.toLowerCase())
    })  
    // ==================================================  


    // product selection
    //=== onCheck: Obtain and display products for comparison onCheck
    const [checkedProducts, setCheckedProducts] = useState([]);
    const [comparisonData, setComparisonData] = useState([]);   

    function onChecked(event, title, amount, image){  

    let selectedObj;
    if (event.target.checked){  
        event.target.checked = true;

        selectedObj= {
        "title": title, 
        "amount": amount,
        "image": image
        }

        setCheckedProducts([...checkedProducts, selectedObj]); 
        const compArray = [...comparisonData, selectedObj.title]
        setComparisonData(compArray);
        
        // check if two items selected and alert if true
        if (comparisonData.length == 2){
        alert("Only 2 Items Allowed!")
        }      
    }else{
        event.target.checked = false;
        selectedObj={};
        // *** We need to update the comparisonData array when we uncheck box ***
    }      
    }

    // the two checked products displayed below search bars
    let checkedProducts1 = checkedProducts;
    let checkedProducts2 = checkedProducts;  
    if (checkedProducts.length === 2){
    checkedProducts1 = checkedProducts[0]
    checkedProducts2 = checkedProducts2[1]
    }


    // Comparison display
    // ===OnClick: Obtain product data for comparison onClicking compare button
    const [comparisonArray, setComparisonArray] = useState([]);
    let dataArray = [];

    function handleCompare(event){

        if (comparisonData.length < 2){
            alert("Please add 2 items!")
        }else{
            // Obtain description data of the checked items
            let checkedArray1 = productsData.filter(function (el) {
            return el.title === comparisonData[0]
            });
            let checkedArray2 = productsData.filter(function (el) {
            return el.title === comparisonData[1]
            });
            
            dataArray = [...comparisonArray, checkedArray1, checkedArray2];     
            setComparisonArray(dataArray); 
            // Stuck here!!! Cannot set state inside a click event   
        }
        // console.log(dataArray)
    }
    // ==================================================  
    

    return(
        <>
        <div className="compareProducts">            
            <hr/>
            <FilterProducts 
            onSortChange={onSortChange} 
            search1={search1} 
            search2={search2} 
            onSearchChange1={onSearchChange1} 
            onSearchChange2={onSearchChange2} 
            onCategoryChange={handleCategoryChange} 
            categories={categories} 
            checkedProducts1={checkedProducts1}
            checkedProducts2={checkedProducts2}
            onCompare={handleCompare} 
            />            
            <hr/>

            {/* display a table of products using Product component */}
            <ul className="products">
                {itemsToDisplay.map((item) => (
                <li key={item.id} className="product">
                    <Product image={item.image} title={item.title} amount={item.price} toggleCheckbox={onChecked} />
                </li>
                ))}
            </ul>

        </div>
        </>
        )
}

export default Comparison;