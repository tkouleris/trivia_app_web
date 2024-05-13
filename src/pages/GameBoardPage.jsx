import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchQuestions} from "../utils/http.jsx";


export default function GameBoardPage(){
    const params = useParams()
    const [questions, setQuestions] = useState([])

    console.log(params)
    useEffect(() => {
        fetchQuestions(window.localStorage.token, params.category).then((response)=>{
            setQuestions(response.data)
        })
    }, []);

    return <div>Gameboard {params.category}</div>
}