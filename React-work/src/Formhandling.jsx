import { useState } from "react"

const Fromhandling = () => {
    const [name, setname] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form is sumiteed by",name)
        setname("");
    }
    return (

        <div>
            <form onSubmit={(e) => {
                handleSubmit(e)
            }}>
                <input type="text"
                 placeholder="Enter your name" 
                 value={name} 
                 onChange={(e) => {
                    setname(e.target.value);
                     }} /><br/>
                <button className="bg-amber-200">Submit</button>
            </form>
        </div>

    )
}
export default Fromhandling