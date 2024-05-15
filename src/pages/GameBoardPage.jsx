import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import {styles} from "../constants/styles.jsx";


export default function GameBoardPage(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const {questions} = state;
    const [currentIndex, setCurrentIndex] = useState(0)
    const [roundStats, setTotalPoints] = useState({
        "points": 0,
        "total_questions": 10,
        "wrong_answers":0,
        "correct_answers": 0,
        "difficulty": "mix"
    })

    function handleAnswer(points){
        if(points > 0 && currentIndex <= (questions.length-1)){
            roundStats.points = roundStats.points + points
            roundStats.correct_answers = roundStats.correct_answers + 1
        }
        if(points === 0 && currentIndex <= (questions.length-1)){
            roundStats.wrong_answers = roundStats.wrong_answers + 1
        }
        if(currentIndex < (questions.length-1)){
            setCurrentIndex(currentIndex + 1)
        }
        setTotalPoints(roundStats)
        if(currentIndex === questions.length-1){
            console.log(roundStats)
            navigate("/results", {state: {stats: roundStats}});
        }
    }

    return <div className={'row dark-background'}>
        <div className={"col-xl-4 col-4"}></div>
        <div className={"col-xl-4 col-4"}>
            <div style={styles.question_text}>{(currentIndex + 1)}. {decodeURIComponent(questions[currentIndex].question)}</div>
            <div style={styles.answers_container}>
            {
                questions[currentIndex].answers.map((answer, index) =>
                    <Button key={index}
                            variant="primary"
                            style={styles.answer_button}
                            onClick={() => handleAnswer(answer.points)}>{decodeURIComponent(answer.answer)}
                    </Button>
                )
            }
            </div>
        </div>
        <div className={"col-xl-4 col-4"}></div>

    </div>
}