import { IoIosArrowDown } from "react-icons/io";
import Tabs from "../components/Tabs";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBook } from "../Utils";

function ListedBook() {
  const [books, setBooks] = useState([]);

  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
const bookData = getBook()
// setSortCriteria(bookData)
setBooks(bookData);
  },[]);
  console.log(books);

  const handleSortClick = (criteria) => {
    setSortCriteria(criteria);
    
    let sortedBooks = [...books]; 

    
    if (criteria === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating); 
    } else if (criteria === "totalPages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages); 
    } else if (criteria === "yearOfPublishing") {
      sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    }

    setBooks(sortedBooks);
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
    <li><a >sort by</a></li>
    <li><a onClick={() => handleSortClick("rating")}>Rating</a></li>
    <li><a onClick={() => handleSortClick("totalPages")}>Number of page</a></li>
    <li><a onClick={() => handleSortClick("yearOfPublishing")}>Published Year</a></li>
  </ul>
</div>
        </div>
        <Tabs></Tabs>
        <Outlet></Outlet>
        
    </div>
  )
}

export default ListedBook