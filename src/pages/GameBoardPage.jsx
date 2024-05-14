import {useLocation} from "react-router-dom";
import {useState} from "react";
import Button from "react-bootstrap/Button";


export default function GameBoardPage(){
    const {state} = useLocation();
    const {questions} = state;
    const [currentIndex, setCurrentIndex] = useState(0)
    questions[currentIndex].answers.map((answer, index) => console.log(answer.answer))

    function handleAnswer(points){
        console.log(points)
        setCurrentIndex(currentIndex+1)
    }

    return <div>
        {(currentIndex+1)}. { decodeURIComponent(questions[currentIndex].question)}
        {
            questions[currentIndex].answers.map((answer, index) => <Button key={index} onClick={()=>handleAnswer(answer.points)}>{decodeURIComponent(answer.answer)}</Button>)
        }
    </div>
}