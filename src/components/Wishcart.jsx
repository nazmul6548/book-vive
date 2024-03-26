
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineContactPage } from "react-icons/md";
import { TiGroup } from "react-icons/ti";

function Wishcart({wish}) {
    console.log(wish);
  return (
    <div>
    <div className="card md:card-side  mb-5 shadow-xl hover:border hover:border-green-400  hover:bg-[#ffac3326] hover:text-black cursor-pointer border border-blue-400">
   <div className="bg-[#1313130d] p-10 ">
   <figure>
      <img
        src={wish.image}
        alt={wish.name}
      />
    </figure>
   </div>
    <div className="card-body">
      <h2 className="card-title playfare text-[24px] font-bold mb-4">{wish.wishName}</h2>
      <p className="font-bold">Author:  {wish.author}</p>
      <div className="flex md:flex-row flex-col md:gap-10 wishs-center mb-4">
        <div className="flex md:flex-row flex-col wishs-center justify-center gap-4">
           <span className="font-black text-xl"> Tags:</span>
            {wish.tags.map(i=><p className="border border-green-300 px-5 rounded-lg py-2 text-xs font-semibold playfare" key={i.wishId}>{i}</p>)}
        </div>
        <div className="flex justify-center wishs-center gap-2">
        <CiLocationOn className="text-xl"/>
        <span>Year of Publishing:</span> {wish.yearOfPublishing}
        </div>
      </div>

      <div className="flex playfare mb-4 mt-4 wishs-center gap-5">
        <div className="flex justify-center wishs-center gap-4">
        <TiGroup />
        <p>Publisher : {wish.publisher}</p>
        </div>
        <div className="flex justify-center wishs-center gap-2 ">
        <MdOutlineContactPage />
        <p>Pages: {wish.totalPages}</p>
        </div>
      </div>
      <hr />

      <div className="card-actions mt-5 ">
        <button className="bg-[#328eff80] text-[#328EFF] py-3 px-5 rounded-2xl">Category : {wish.category}</button>
        <button className="bg-[#ffac3326] text-[#FFAC33] py-3 px-5 rounded-2xl">Ratings : {wish.rating}</button>
        <button className="bg-[#23BE0A] text-white py-3 px-5 rounded-2xl">View Details</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Wishcart