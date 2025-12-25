import { useNavigate } from "react-router-dom";

function About(){
   let navigate= useNavigate()
   const btnclicked = () =>{
    navigate("/")
   }
    return(<>
    <div>
        <button onClick={btnclicked}className="bg-green-900 rounded m-2 cursor-pointer py-2 px-4 active:scale-95">Return to Home</button>
        <button onClick={()=>{navigate(-1)}}className="bg-green-900 rounded m-2 cursor-pointer py-2 px-4 active:scale-95">Back</button>
        <h1 className="flex justify-center items-center text-6xl font-bold py-50">About</h1>
    </div>
    </>)
}
export default About;