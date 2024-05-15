import {Navigate, Outlet, useLocation} from "react-router-dom";


export default function PrivateRoutes(){
    // const location = useLocation();
    let authLogin = window.localStorage.getItem('token') !== null;
    console.log('authLogin:' + authLogin)
    if (authLogin === undefined) {
        authLogin = false;
    }

    return authLogin
        ? <Outlet />
        : <Navigate to="/login"  />;
}