import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Search from './components/Search.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/weather-app/",
    element: <App/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "weather-app/search",
    element: <Search />,
  },
  {
    path: '*',
    element: <Error/>
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
