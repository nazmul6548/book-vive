import { useLoaderData } from "react-router-dom"
import Review from "../components/Review";


function Note() {
    const data = useLoaderData();
    console.log(data);
  return (
    <div className="mt-10">
        <div className="bg-[#1313130D] flex justify-center rounded-xl">
            <h1 className="text-5xl font-bold p-10">Review</h1>
        </div>
        <div className="grid grid-cols-1 gap-10  md:grid-cols-3 mt-10">
        {
            data.map(item => <Review key={item.bookId} item={item}></Review>)
        }
        </div>
    </div>
  )
}

export default Note