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
         element:<Applied_Job></Applied_Job>,
         loader:()=>fetch('jobs.json'),
      },
      {
         path:'/job_details/:id',
         element: <Job_Details></Job_Details>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
