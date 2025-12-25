 import { Link, Outlet } from "react-router-dom"

function Product(){
    return(<>
    <div>
        <div className="flex justify-center gap-10 py-4">
            <Link className="text-xl font-semibold" to='/Product/Men'>Men</Link>
             <Link className="text-xl font-semibold" to='/Product/Women'>Women</Link>
              <Link className="text-xl font-semibold" to='/Product/Kids'>Kids</Link>
        </div>
        <Outlet/>
        
    </div>
    </>)
}
export default Product