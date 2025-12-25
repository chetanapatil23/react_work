import { useNavigate } from "react-router-dom";

function Navbaar2(){
   let navigate= useNavigate()
   const btnclicked = () =>{
    navigate("/")
   }
    return(<>
    <div>
        <button onClick={btnclicked}className="bg-green-900 rounded m-2 cursor-pointer py-2 px-4 active:scale-95">Return to Home</button>
        <button onClick={()=>{navigate(-1)}}className="bg-green-900 rounded m-2 cursor-pointer py-2 px-4 active:scale-95">Back</button>
    </div>
    </>)
}
export default Navbaar2;