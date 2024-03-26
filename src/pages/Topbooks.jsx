import { useLoaderData } from "react-router-dom"
import TopCol from "../components/TopCol";


function Topbooks() {
    const top = useLoaderData()
    console.log(top);
  return (
    <div>
        <div>
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our Top Books</h1>
		<p className="max-w-2xl text-center dark:text-gray-600">It sounds like youre referring to a section or category titled Our Top Books. This section typically showcases a curated list of books that are recommended </p>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
        {
            top.map(item => <TopCol key={item.bookId} item={item}></TopCol> )
        }
        </div>
    </div>
  )
}

export default Topbooks