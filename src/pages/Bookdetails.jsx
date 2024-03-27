import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "../Utils";
import { saveWishlist } from "../Utils/Wishlist";



function Bookdetails() {

const [a,setA] = useState(true);

const books = useLoaderData()
const {bookId} =useParams()
const idint =parseInt(bookId)

const book =books.find(book => book.bookId === idint)




const handleReadButton=(id)=>{
  setA(true)
    saveBook(id);
    
    setA(false)
  
    
  
}

const handleWishlistButton=(id)=>{
    if (a===false) {
       toast.error("you have Already added read this book")
        return
    }
    
     saveWishlist(id)
     setA(false)

} 




  return (
    <div>
  <div className="hero min-h-screen  mt-10 ">
  <div className="hero-content flex-col lg:flex-row gap-16">
    <div className="flex items-center md:w-[100%] bg-[#1313130D]  justify-center py-20 px-20 rounded-xl">
    
    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl w-[100%]" />
   
    </div>
    <div className="md:w-[60%]">
      <h1 className="text-5xl font-bold pb-6">{book.bookName}</h1>
      <p>By : {book.author}</p>

      <div className="divider"></div>
      <h3 className="font-bold">{book.category}</h3>
      <div className="divider"></div>
      <p className="py-6">{book.review}</p>
      <h3 className="font-bold">Tags : <span className="text-lime-500 bg-[#1313130D] p-2 rounded-xl">{book.tags[0]}</span> <span className="text-lime-500 bg-[#1313130D] p-2 rounded-xl">{book.tags[1]}</span></h3>
      <div className="divider"></div>
      <p className="flex justify-between w-[90%] font-bold text-xl pb-2">Number of Page : <span>{book.totalPages}</span></p>
      <p className="flex justify-between w-[90%] font-bold text-xl pb-2">Publisher : <span>{book.publisher}</span></p>
      <p className="flex justify-between w-[90%] font-bold text-xl pb-2">Year of Publishing : <span>{book.yearOfPublishing}</span></p>
      <p className="flex justify-between w-[90%] font-bold text-xl pb-2">Rating : <span>{book.rating}</span></p>

      <div className="mt-10">
      <button onClick={() => handleReadButton(book)} className="btn bg-white hover:bg-[#23BE0A] hover:text-white font-bold p-5 mr-5">Read</button>
      <button onClick={() => handleWishlistButton(book)} className="btn bg-[#50B1C9] font-bold text-white p-5">Wishlist</button>
      </div>
    </div>
  </div>
  <ToastContainer />

</div>
    </div>
  )
}

export default Bookdetails;