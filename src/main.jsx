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
const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listedbook",
        element:<ListedBook></ListedBook>
      },
      {
        path:"/pageread",
        element:<Pagestoread></Pagestoread>
      },
      {
        path:"/note",
        element:<Home></Home>
      },
      {
        path:"/list",
        element:<Home></Home>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
