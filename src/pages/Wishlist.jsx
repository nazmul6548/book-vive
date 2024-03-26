import { useEffect, useState } from "react"
import { getWishlist } from "../Utils/Wishlist"
import Wishcart from "../components/Wishcart"


function Wishlist() {

  const [wish,setWish]=useState([])
  useEffect(() => {
    const wishBook = getWishlist()
    setWish(wishBook)
  console.log(wishBook);
  },[])
  console.log(wish);

  return (
    <div>
       {
        wish.map((wish) => <Wishcart key={wish.bookId}  wish={wish}></Wishcart>)
      }
    </div>
  )
}

export default Wishlist