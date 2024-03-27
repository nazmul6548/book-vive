import { toast } from "react-toastify";

export const getWishlist = () => {
    let Wishlists = [] ;
    const storedWish = localStorage.getItem('Wishlist');
    if (storedWish) {
        Wishlists =JSON.parse(storedWish)
    }
    return Wishlists;
}




export const saveWishlist = (wish) => {
    let Wishlists = getWishlist()
    const isExist = Wishlists.find(b => b.bookId==wish.bookId)

    if(isExist) {
       return toast.error('Wishlist')
    }else{
    Wishlists.push(wish)
    localStorage.setItem('wishlist', JSON.stringify(Wishlists))
    toast.success("Book added to wishlist")
}
}