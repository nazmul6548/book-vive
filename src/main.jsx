import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Mainlayout from './layout/Mainlayout';
import ListedBook from './pages/ListedBook';
import Pagestoread from './pages/Pagestoread';
import Bookdetails from './pages/Bookdetails';
import Readbook from './pages/Readbook';
import Wishlist from './pages/Wishlist';
import { ToastContainer } from 'react-toastify';
import Note from './pages/Note';
import Topbooks from './pages/Topbooks';
import ErrorPage from './components/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        
      },
      

      {
        path:"Book/:bookId" ,
        element:<Bookdetails></Bookdetails>,
        loader:() => fetch("fake.json"),
     },

     {
      path:'/listedbook',
      element:<ListedBook></ListedBook>,
      children:[
        {
          path:"readbook",
          element:<Readbook></Readbook>
        },
        {
          path:'wishlist',
          element:<Wishlist></Wishlist>
        }
      ]
    },
  

      {
        path:"/pageread",
        element:<Pagestoread></Pagestoread>

      },
      {
        path:"note",
        element:<Note></Note>,
        loader:() => fetch("./fake.json")
      },
      {
        path:"list",
        element:<Topbooks></Topbooks>,
        loader:() => fetch("./fake.json")
      },
      
    ],
    
  },

 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
 
)
