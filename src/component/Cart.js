import React ,{useState,useEffect}from "react";

const Cart=()=>{
    const [cartData,setCartData]=useState(null);
    useEffect(()=>{
      
   fetch("https://fakestoreapi.com/carts/1")
   .then((response)=>response.json())
   .then((data)=>setCartData(data))
   .catch((error)=>console.error("Error",error));
       },[]);
    if(!cartData){
        return<div>Loading...</div>
    }
      
    return(
        <div className="cartdata">
          <p>userId:{cartData.userId}</p>
          <p>Date:{cartData.date.substring(0, 10)}</p>
    
          <ul>{cartData.products.map((product)=>(
            <li key={product.productId}>
                Product ID:{product.productId},Quantity:{product.quantity}
            </li>
          ))}</ul>
        </div>
    )
}
export default Cart;