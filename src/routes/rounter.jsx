import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Addrestaurant from '../Pages/Addrestaurant'
import Update from '../Pages/Update'

const rounter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/addrestaurant",
      element:<Addrestaurant/>
    },
    {
      path:"/update/:id",
      element:<Update/>
    }
  ]);


export default rounter
