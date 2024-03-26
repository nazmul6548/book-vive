import { useEffect, useState } from "react"
import Book from "./Book";


function Books() {
    const [books,setBooks] = useState([]);
    useEffect( () => {
        fetch('fake.json')
        .then(res => res.json())
        .then(books => setBooks(books))
    },[])
    console.log(books);
  return (
    <div className=" mt-12">
        <div className="flex justify-center">
            <h1 className="text-5xl font-bold">Books</h1>
        </div>


        <div>
            
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
           {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
           </div>

        </div>
    </div>
  )
}

export default Books