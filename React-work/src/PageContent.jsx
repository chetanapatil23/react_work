import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const PageContent = () =>{
    return(
       
        <div className="py-10 flex gap-10 items-center h-[90vh] bg-amber-50">
            <LeftContent/>
            <RightContent/>
        </div>
      
    )
}
export default PageContent