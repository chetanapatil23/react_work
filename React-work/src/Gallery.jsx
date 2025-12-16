import axios from "axios";
import { useEffect, useState } from "react";
function Gallery() {
    const [data, setData] = useState([])
    const [index, setindex] = useState(1)
    const getdata = async () => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
        setData(response.data)
    }
    useEffect(function () {
        getdata()
    }, [index])

    let prinUserData = <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">Loding...</h3>
    if (data.length > 0) {
        prinUserData = data.map(function (ele, idx) {
            return <div key={idx}>
                <a href={ele.url} target="_blank">
                    <div className="h-50 overflow-hidden w-64 rounded-xl">
                        <img className="h-full w-full object-cover" src={ele.download_url} alt="" />
                    </div>
                    <h2 className="font-bold text-lg">{ele.author}</h2>
                </a>
            </div>
        })
    }
    return (
        <div className="bg-black h-screen p-4 text-white overflow-auto">
            
            <div className="flex flex-wrap h-[82%] gap-4">
                {prinUserData}
            </div>
            <div className="flex justify-center items-center  gap-6 p-6">
                <button onClick={() => {
                    if (index > 1) {
                        setindex(index - 1)
                        setData([])
                    }
                }} className="bg-amber-400 text-sm active:scale-95 rounded px-4 py-2 font-semibold">prev</button>
                <h3>Page{index}</h3>
                <button onClick={() => {
                setData([])
                    setindex(index + 1)
                }} className="bg-amber-400 text-sm active:scale-95 rounded px-4 py-2 font-semibold">Next</button>
            </div>
        </div>
    )
}
export default Gallery;