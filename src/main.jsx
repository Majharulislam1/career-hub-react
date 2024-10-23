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
      },{
         path:'/job_details/:id',
         loader:()=>fetch('jobs.json'),
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
