import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import All_Job from './Components/All_Job';
import Job_Details from './Components/Job_Details';
import Applied_Job from './Components/Applied_Job';
import Registration from './Components/Registration';
import Login from './Components/Login';
import PrivetRoute from './Components/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },{
        path:'/all_job',
        loader:()=>fetch('jobs.json'),
        element: <All_Job></All_Job>,
      },
      {
         path:'/applied_job',
         element:<PrivetRoute><Applied_Job></Applied_Job>,</PrivetRoute>,
         loader:()=>fetch('jobs.json'),
      },
      {
         path:'/job_details/:id',
         element: <PrivetRoute><Job_Details></Job_Details></PrivetRoute>
      },
      {
         path:'/registration',
         element:<Registration></Registration>

      }
      ,
      {
         path:'/login',
         element:<Login></Login>

      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
