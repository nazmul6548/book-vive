import { toast } from "react-toastify";

export const getBook = () => {
    let books = [] ;
    const storedBook = localStorage.getItem('book');
    if (storedBook) {
        books =JSON.parse(storedBook)
    }
    return books;
}




export const saveBook = (book,storageKey) => {
    let books = getBook(storageKey)
    const isExist = books.find(b => b.bookId===book.bookId)

    if(isExist) {
        toast.success("Book already exists")
    }else{
    books.push(book)
    localStorage.setItem('book', JSON.stringify(books))
    toast.success("Book already exists")
}
}