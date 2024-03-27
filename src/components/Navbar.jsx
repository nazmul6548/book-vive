
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {/*  */}
          
          <Link to='/listedbook'>Listed Book</Link>
          <Link to='/pageread'>Page to Read</Link>
          <Link to='/note'>Review</Link>
          <Link to='/list'>Top Book</Link>
        
        
          {/*  */}
        </ul>
      </div>
      <Link to='/' className="btn btn-ghost text:sm md:text-4xl font-bold">Book Vibe</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 flex items-center font-bold gap-5">
        <NavLink to='/' className={({isActive}) => isActive ? 'text-[#23BE0A] font-bold border-2 p-1 rounded-md border-[#23BE0A]' : 'font-bold'}>Home</NavLink>

        <NavLink to='/listedbook' className={({isActive}) => isActive ? 'text-[#23BE0A] font-bold border-2 p-1 rounded-md border-[#23BE0A]' : 'font-bold'}>Listed Book</NavLink>

        <NavLink to='/pageread' className={({isActive}) => isActive ? 'text-[#23BE0A] font-bold border-2 p-1 rounded-md border-[#23BE0A]' : 'font-bold'}>Page to Read</NavLink>

        <NavLink to='/note' className={({isActive}) => isActive ? 'text-[#23BE0A] font-bold border-2 p-1 rounded-md border-[#23BE0A]' : 'font-bold'}>Review</NavLink>   

        <NavLink to='/list' className={({isActive}) => isActive ? 'text-[#23BE0A] border-2 p-1 rounded-md border-[#23BE0A] font-bold' : 'font-bold'}>Top Book</NavLink> 




      
      </ul>
    </div>
    <div className="navbar-end flex gap-5">
      <a className="btn bg-[#23BE0A]">Sign In</a>
      <a className="btn bg-[#59C6D2]">Sign Up</a>
    </div>

  </div>















  )
}

export default Navbar