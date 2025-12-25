import { useParams } from "react-router-dom";

function Course(){
    const params=useParams()
  
    return(<>
    <div>
        <h1 className="flex justify-center items-center text-6xl font-bold py-50">{params.id}Course</h1>
    </div>
    </>)
}
export default Course;