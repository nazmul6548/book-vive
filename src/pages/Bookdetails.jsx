import { useLoaderData, useParams } from "react-router-dom";



function Bookdetails() {
const books = useLoaderData()
const {bookId} =useParams()
const idint =parseInt(bookId)
console.log(books,bookId);
const book =books.find(book => book.bookId === idint)
console.log(book);
  return (
    <div>
  <div className="hero min-h-screen  mt-10 ">
  <div className="hero-content flex-col lg:flex-row gap-16">
    <div className="flex items-center w-[40%] bg-[#1313130D] ">
    
    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl w-[100%]" />
   
    </div>
    <div className="w-[60%]">
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
      <button className="btn btn-primary mr-5">Get Started</button>
      <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Bookdetails;

