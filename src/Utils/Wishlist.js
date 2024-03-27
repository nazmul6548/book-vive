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
        const newdata = [...Wishlists,wish]
    // Wishlists.push(wish)
    localStorage.setItem('Wishlist', JSON.stringify(newdata))
    toast.success("Book added to wishlist")
}
}