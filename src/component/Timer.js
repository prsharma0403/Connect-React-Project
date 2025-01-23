import React, { useEffect, useState } from "react";

const Timer=()=>{
const [timerLeft,setTimerLeft]=useState(600);
const[isRunning,setIsRunning]=useState(false);

const formatTime=(seconds)=>{
    const minutes=Math.floor(seconds/60);
    const remainingSeconds=seconds%60;
    return `${minutes.toString().padStart(2,'0')}:${remainingSeconds.toString().padStart(2,'0')}`
};
useEffect(()=>{
    let timer;
    if( isRunning && timerLeft>0){
     timer=setInterval(()=>{setTimerLeft((prev)=>prev-1);},1000);
    }
    return()=>clearInterval(timer)
},[isRunning,timerLeft]);
const startTimmer=()=>{
    setIsRunning(true)
};
return(<>
<button onClick={startTimmer}>Start Break time</button>
<h2>Break Starts</h2> 
<h3>{formatTime(timerLeft)}</h3>

{timerLeft===0 && <h4>Break is over</h4>}
</>)
}

export default Timer;