import axios from "axios"
import { useState } from "react"
const RightContent = () => {
    const [data, setData] = useState([])

    /*const getdata = async() =>{
        const  rsponse= await fetch('https://jsonplaceholder.typicode.com/todos')
        const data= await rsponse.json()
        console.log(data)}*/

    const getdata = async () => {
        const ressponse = await axios.get('https://picsum.photos/v2/list')
        setData(ressponse.data)
    }

    return (

        <div>
            <button onClick={getdata}>Get data</button>
            <div>
                {data.map(function (ele, idx) {
                    return <h4>heelllo{idx}{ele.author}</h4>
                })}
            </div>
        </div>

    )
}
export default RightContent




