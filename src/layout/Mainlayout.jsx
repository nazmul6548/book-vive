import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"



function Mainlayout() {
  return (
    <div className="container m-auto my-5">
        <div>
        <Navbar></Navbar>
        
    </div>
    
    <Outlet></Outlet>
    
    </div>
  )
}

export default Mainlayout