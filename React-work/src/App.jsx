import { useState } from "react"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Fromhandling from "./Formhandling"
import Notes from "./Notes"
const App = () => {
  const[count,setcount]=useState(10)
  function btn(){
   {/* const newobj={...count}
    newobj.user="disha"
    newobj.age=15
   setcount(newobj)
   newarr.push(50)*/}
  //this is batching concept in reCtat
  // setcount(val=>(val+1))
   //setcount(val=>(val+1))
  setcount(val=>(val+1))
   
 
  }
  return (
    <>
   
    <Notes/>
    <h3>{count}</h3>
   <button className="bg-blue-100 rounded-2xl"onClick={btn}>click</button>
    </>
  )
}

export default App
