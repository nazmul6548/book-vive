import { useEffect, useState } from "react"
import { saveBook } from "../Utils"
import Readcart from "../components/Readcart"


function Readbook() {
    const [read,setRead] = useState([])
    useEffect(() => {
const storebook = saveBook()
setRead(storebook)
    },[])
    console.log(read);
  return (
    <div>
        {/* {
            read.map(book => <Readcart key={read.bookId} book={book}></Readcart>)
        } */}
        <h2>hi</h2>
    </div>
  )
}

export default Readbook