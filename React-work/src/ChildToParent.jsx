// Child component mein button click event par sendname function 2 baar call ho raha hoga
// Check karna hoga Child component mein:
// 1. onClick event mein single function call ho
// 2. useEffect ya kisi aur lifecycle method mein duplicate call na ho
// 3. Event bubbling na ho raha ho

import { useState } from "react";
import Child from "./Child";

function ChildToParent(){
    const [name,setName]=useState("")
    function getName(data){
        setName(data)
    }
    
    {/*return(
        <div>
          <Child name={name} setName={setName}/>
       <h2>Typed Name: {name}</h2>
          
        </div>
    )*/}
    return(
        <div>
            <h2>{name}</h2>
        <Child sendname={getName}/>
        </div>

    )
}
export default ChildToParent;
