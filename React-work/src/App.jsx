import Section1 from "./Section1"
import Section2 from "./Section2"
import Fromhandling from "./Formhandling"
import Notes from "./Notes"
import Navbaar from "./Navbaar"
import RightContent from "./RightContent"
import Api from "./Api"
import Gallery from "./Gallery"
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Product from "./Product"
import Course from "./Course"
import Men from "./Men"
import Women from "./Women"
import Kids from "./Kids"
import NotFound from "./NotFound"
import Navbaar2 from "./Navbaar2"
import ChildToParent from "./ChildToParent"
import Child from "./Child"
import Login from "./Login"
import Signup from "./Signup"


const App = () => {
  


  return (
    <>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login/>} />
       <Route path="/Gallery" element={<Gallery/>} />
      </Routes>
       

  
   {/*} <Navbaar2/>
      <div className="min-h-screen flex flex-col">
        <div className="flex justify-between items-center gap-10 px-4 py-6 bg-cyan-700">
          <h2 className="text-3xl font-bold">Chetana</h2>
          <div className="flex justify-between items-center gap-10">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Course">Course</Link>
          </div>
        </div>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Product" element={<Product />} >
            <Route path="Men" element={<Men/>} />
             <Route path="Women" element={<Women />} />
              <Route path="Kids" element={<Kids/>} />
              </Route>
            <Route path="/Course" element={<Course />} />
             <Route path="/Course/:id" element={<Course />} />


            
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <footer className="text-center p-3 bg-cyan-700 mt-auto">
          This is Footer
        </footer>
      </div>*/}
    </>
  )

}
export default App
