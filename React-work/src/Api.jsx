import { useState } from "react"
import axios from "axios";
function Api() {
    const [data, setData] = useState([]);
    const getdata = async () => {
        const ressponse = await axios.get('https://api.freeapi.app/api/v1/public/cats?query=sociable&page=1&limit=10')
        setData(ressponse.data.data.data)
        console.log(ressponse.data.data.data)
    }
    return (
        <>
           <div>
            <button onClick={getdata}>Get data</button>
            <div>
                {data.map(function (ele, idx) {
                 return <h4>{idx}<br/><img src={ele.image}width="120"/></h4>
                })}  
            </div>
        </div>

        </>
    )
}
export default Api
