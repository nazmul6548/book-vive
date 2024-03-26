import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Book({book}) {
    const {rating,category,author,bookName,tags,image,bookId} = book;
  return (
    <Link to={`/Book/${bookId}`}>
    
    <div className="card  bg-base-100 shadow-xl border-2">
  <figure className="px-10 pt-10 ">
    <img src={image} alt="Shoes" className="rounded-xl bg-[#1313130D] px-20 py-10 sm:px-36 sm:py-14 max-w-[100%]" />
  </figure>
  <div className="card-body ">
    <div className="flex  justify-center items-center  gap-4 pb-5">
        <p className="bg-[#1313130D]  font-bold rounded-xl p-2 text-[#23BE0A]">{tags[0]}</p>
        <p className="bg-[#1313130D]  font-bold rounded-xl p-2  text-[#23BE0A]">{tags[1]}</p>
     
    </div>
    <h2 className="card-title text-3xl font-bold pb-5">{bookName}</h2>
    <p className="font-bold pb-5">By : {author}</p>
    
    <div className="divider"></div>

    
     <div className="flex justify-between">
     <p className="font-bold">{category}</p>
        
        <div>
            
            <p className="font-bold flex items-center justify-between">{rating}  <FaRegStar className="ml-2"></FaRegStar></p>
            
        </div>

     </div>
    
    
   
  </div>

  
  
</div>
    
    </Link>
  )
}

export default Book