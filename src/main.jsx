import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './trivia.css'
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from "./pages/RegistrationPage.jsx";
import GameBoardPage from "./pages/GameBoardPage.jsx";
import RoundResultPage from "./pages/RoundResultPage.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoutes />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardPage />,
                // errorElement: <NotFoundPage />
            },
            {
                path: '/gameboard',
                element: <GameBoardPage />,
                // errorElement: <NotFoundPage />
            },
            {
                path: '/results',
                element: <RoundResultPage />,
                // errorElement: <NotFoundPage />
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
        // errorElement: <NotFoundPage />
    },
    {
        path: '/register',
        element: <RegistrationPage />,
        // errorElement: <NotFoundPage />
    },
    // {
    //     path: '/dashboard',
    //     element: <DashboardPage />,
    //     // errorElement: <NotFoundPage />
    // },
    // {
    //     path: '/gameboard',
    //     element: <GameBoardPage />,
    //     // errorElement: <NotFoundPage />
    // },
    // {
    //     path: '/results',
    //     element: <RoundResultPage />,
    //     // errorElement: <NotFoundPage />
    // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
