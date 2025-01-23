import { useEffect, useState } from "react";
import React from "react";

const Whether=()=>{

    const[temperature,setTemperature]=useState(0);
    const increment=()=> setTemperature(temperature+1);
    const decrement=()=>setTemperature(temperature-1);


const getColor=()=>{
    if(temperature <0)return "skyblue";
    if(temperature>=0 && temperature <=15)return "blue";
    if(temperature>15 && temperature<=45)return"green";
    return "red";
}

    return(
    
    <div  className="whether-display "> 
   
    <button  style={{
        display:"flex",
        alignItems:"centre",
        justifyContent:"center",
        backgroundColor:getColor(),
        color:"#fff",
       fontSize:"30px",
       margin: "35px",
       padding: "67px", 
       width: "175px",
       border: "2px solid white",
       borderRadius:"50%",
      

    }}>{temperature}°C</button>
    <div className="whether-button">
       
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    </div>
   
    </div>)
}
export default Whether;