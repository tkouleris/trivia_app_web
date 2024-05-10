import {useEffect} from "react";
import {getStats} from "../utils/http.jsx";

export default function DashboardPage(){

    useEffect(() => {
        getStats(window.localStorage.getItem('token')).then((resp)=>{
            console.log(resp.data.data)
        })
    }, []);

    return <div>Dashboard</div>
}