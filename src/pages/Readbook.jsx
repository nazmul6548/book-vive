import { useEffect, useState } from "react"
import { getBook, saveBook } from "../Utils"
import Readcart from "../components/Readcart"



function Readbook() {
    
    const [read,setRead] = useState([])
    useEffect(() => {
const storebook = getBook()
setRead(storebook)
const sortedBooks = storebook.sort((a, b) => b.rating - a.rating);
    setRead(sortedBooks);
},[])





console.log(read);
   
  return (
    <div>
      
      {
        read.map((book) => <Readcart key={book.bookId}  book={book}></Readcart>)
      }
    </div>
  )
    }
export default Readbook;
