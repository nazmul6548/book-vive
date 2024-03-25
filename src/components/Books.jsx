import { useEffect, useState } from "react"


function Books() {
    const [books,setBooks] = useState([]);
    useEffect( () => {
        fetch('fake.json')
        .then(res => res.json())
        .then(books => console.log(books))
    },[])
  return (
    <div className=" mt-12">
        <div className="flex justify-center">
            <h1 className="text-4xl font-bold">Books</h1>
        </div>


        <div>

        </div>
    </div>
  )
}

export default Books