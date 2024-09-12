
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/error-page.jsx';

const router =createBrowserRouter([
   {
    path: "/",
    element: <h1>Home Page</h1>,
   }, 

   {
    path:"/signin",
    element: <h1>Sign in</h1>,
   },

   {
    path: "/sign out",
    element: <h1>Sign out</h1>,
   },
    
   {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />,
   }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}   />
   
  </StrictMode>,
);
