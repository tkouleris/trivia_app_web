import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import App from './App.jsx'
// import './index.css'
import './trivia.css'
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from "./pages/RegistrationPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
        // errorElement: <NotFoundPage />
    },
    {
        path: '/register',
        element: <RegistrationPage />,
        // errorElement: <NotFoundPage />
    },
    {
        path: '/dashboard',
        element: <DashboardPage />,
        // errorElement: <NotFoundPage />
    },
    // {
    //     path: '/profiles',
    //     element: <ProfilesPage />,
    //     children:[
    //         {
    //             path: '/profiles/:profileId',
    //             element: <ProfilePage />
    //         }
    //     ]
    // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
