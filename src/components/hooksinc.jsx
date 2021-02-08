import React,{useState} from 'react'

export default function HooksInc(){
    const [count,inccount]=useState(0)
    const inc=()=>{
        inccount(count+1)
    }
       const dec=()=>{
           if(count>1){
        inccount(count-1)
           }
    }
    return(
        <div>
        <h1 style={{background:"blue",color:"white"}}>{count}</h1>
        <button onClick={()=>inc()}>Inc</button>
         <button onClick={()=>dec()}>Dec</button>
        </div> 

    )
}

