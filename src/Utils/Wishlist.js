import { toast } from "react-toastify";

export const getWishlist = () => {
    let Wishlist = [] ;
    const storedBook = localStorage.getItem('Wishlist');
    if (storedBook) {
        Wishlist =JSON.parse(storedBook)
    }
    return Wishlist;
}




export const saveWishlist = (book,storageKey) => {
    let Wishlist = getWishlist(storageKey)
    const isExist = Wishlist.find(b => b.id===book.id)

    if(isExist) {
        toast.success('Wishlist')
    }else{
    Wishlist.push(book)
    localStorage.setItem('wishlist', JSON.stringify(Wishlist))
    toast.success("Book already exists")
}
}