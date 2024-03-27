import { IoIosArrowDown } from "react-icons/io";
import Tabs from "../components/Tabs";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function ListedBook() {

  const [sortCriteria, setSortCriteria] = useState("");
  
  const handleSortClick = (criteria) => {
    setSortCriteria(criteria); // Update sorting criteria
  };

  return (
    <div>
        <div className="bg-[#1313130D] text-center py-10 rounded-xl">
          <h1 className="text-5xl font-bold">Books</h1>
        </div>
        <div>

        <div className="dropdown  mt-10 flex justify-center items-center">
  <div tabIndex={0} role="button" className="btn m-1 font-bold bg-[#23BE0A] text-white ">Sort  By <span><IoIosArrowDown /></span></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-36">
    <li><a onClick={() => handleSortClick("rating")}>Sort by</a></li>
    <li><a>Rating</a></li>
    <li><a>Number of page</a></li>
    <li><a>Published Year</a></li>
  </ul>
</div>
        </div>
        <Tabs></Tabs>
        <Outlet></Outlet>
        
    </div>
  )
}

export default ListedBook