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
import LandingPage from "./pages/LandingPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ConfirmResetPasswordPage from "./pages/ConfirmResetPasswordPage.jsx";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '../config.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/",
        element: <PrivateRoutes />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardPage />,
            },
            {
                path: '/gameboard',
                element: <GameBoardPage />,
            },
            {
                path: '/results',
                element: <RoundResultPage />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegistrationPage />,
    },
    {
        path: '/reset-password-page',
        element: <ResetPasswordPage />,
    },
    {
        path: '/confirm-reset-password',
        element: <ConfirmResetPasswordPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
  </React.StrictMode>,
)
