import {useParams} from "react-router-dom";
import {useEffect, useLayoutEffect, useState} from "react";
import {fetchQuestions} from "../utils/http.jsx";


export default function GameBoardPage(){
    const params = useParams()
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    console.log(params)
    useEffect(() => {
        fetchQuestions(window.localStorage.token, params.category).then((response)=>{
            if(questions.length === 0){
                console.log('1')
                setQuestions(response.data)
            }
        })
    }, []);

    return <div>{(currentIndex+1)}. { decodeURIComponent(questions[currentIndex].question)}</div>
}