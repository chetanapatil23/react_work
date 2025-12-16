import { useState } from "react"
const Section1 = () => {
    const [dob, setDob] = useState("")
    const[result,setResult]=useState("")
    const calclutlateAge=()=>{
        if(!dob){
            setResult("please enter your birthdate")
            return;
        }
        const brithyear=new Date(dob).getFullYear();
        const currentyear=new Date().getFullYear();
        const age =currentyear - brithyear
        setResult(`your age is ${age} year old`)
    }
    return (

        <div className="flex justify-center">
            <div className="h-[60vh] w-[50vw] shadow-md rounded-b-lg my-20" >
                <h1 className="text-green-400 text-2xl text-center">clculate age from date of birth</h1>
               <h1  className="flex justify-center mt-20"><input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                Enter your birthdate:  </h1>
                <button onClick={calclutlateAge} className="bg-gray-200 flex justify-center mx-80 rounded-lg my-30">Claculate Age</button>
                <p className="bg-gray-200 flex justify-center">{result}</p>
            </div>
        </div>
    )
}
export default Section1
