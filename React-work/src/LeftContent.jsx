import { MdArrowOutward } from "react-icons/md";
const LeftContent = () =>{
    return(
      
        <div className="h-full flex flex-col justify-between w-1/4 bg-blue-400">
            <div>
                <h3 className="mb-5 text-5xl font-bold">Prospective<br/><span>Customer</span><br/>Segmentation</h3>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime. Consequuntur, accusantium. Temporibus, minus omnis. Rem vero voluptates magnam aliquid.</p>
            </div>
<div><MdArrowOutward size={30}/></div>
        </div>
     
    )
}
export default LeftContent