import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"



function Mainlayout() {
  return (
    <div>
        <div>
        <Navbar></Navbar>
        
    </div>
    
    <Outlet></Outlet>
    
    </div>
  )
}

export default Mainlayout