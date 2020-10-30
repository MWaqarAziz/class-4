import React, { useState } from 'react';
import "./room.css"
function Room (){
    let [lit, isLit] = useState(true)
    let [count, setCount] = useState(1)
    return (
        <div className={`room ${lit?"lit" : "black"}`}>
           <h1>{lit?"Lit":"Dark"}</h1> 
           <button onClick={()=>isLit(!lit)}>Change Lit</button>
            <div> 
                <button onClick={() => setCount(++count)}>Let Count</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(--count)}>Let Minus Count</button></div>
          
            
            </div>
    );
}
export default Room;