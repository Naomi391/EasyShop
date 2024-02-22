import React from "react";
import { useNavigate, useLocation } from "react-router-dom";


function ProductsCompare(){

    let location = useLocation();
    const navigate = useNavigate();

    let product1 = location.state[0];
    let product2 = location.state[1];

    
    return(
        <>
        <div>
            <table style={{border:"2px solid #ddd", width:"100%", height:"100vh", borderCollapse:"collapse", padding:"0px 20px"}}>
                <tbody>
                    <tr style={{paddingTop: "12px",paddingBottom: "12px"}}>
                        <td>&nbsp;</td>
                        <th style={{border:"1px solid #ddd", backgroundColor:"rgb(251 191 36)"}}>{product1.title}</th>
                        <th style={{border:"1px solid #ddd", backgroundColor:"rgb(251 191 36)"}}>{product2.title}</th>
                    </tr>
                    <tr>
                        <td style={{textAlign:"left", padding: "0px 12px"}}>ID: </td>
                        <td>{product1.id}</td>
                        <td>{product2.id}</td>
                    </tr>
                    <tr style={{border:"1px solid #ddd", backgroundColor:"#f2f2f2"}}>
                        <td style={{textAlign:"left", padding: "0px 12px"}}>Category: </td>
                        <td>{product1.category}</td>
                        <td>{product2.category}</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:"left", padding: "0px 12px"}}>Image: </td>
                        <td><img src={product1.image} alt="product1Img"  style={{margin:"auto", width:"50%"}}/></td>
                        <td><img src={product2.image} alt="product2Img"  style={{margin:"auto", width:"50%"}}/></td>
                    </tr>
                    <tr style={{textAlign:"left", border:"1px solid #ddd", backgroundColor:"#f2f2f2"}}>
                        <td style={{padding: "0px 12px"}}>Description: </td>
                        <td style={{textAlign:"left"}}>{product1.description}</td>
                        <td style={{textAlign:"left"}}>{product2.description}</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:"left", padding: "0px 12px"}}>Price: </td>
                        <td>{product1.price}</td>
                        <td>{product2.price}</td>
                    </tr>
                    <tr style={{border:"1px solid #ddd", backgroundColor:"#f2f2f2"}}>
                        <td style={{textAlign:"left", padding: "0px 12px"}} >Rating: </td>
                        <td>{product1.rating}</td>
                        <td>{product2.rating}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
            <button onClick={() => navigate('/Comparison')} style={{padding:"4px 20px", background:"#71F25C", margin:"20px 40px 10px 400px", borderRadius:"20px", border:"2px solid black", color:"black"}} >&nbsp;&nbsp;Go back&nbsp;&nbsp;</button>
            <button onClick={() => navigate('/')} style={{padding:"4px 20px", background:"#71F25C", margin:"20px 400px 10px 40px", borderRadius:"20px", border:"2px solid black", color:"black"}} >Go to Home</button>
        </div>
        </>
    )
}

export default ProductsCompare;