import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowBack } from 'react-ionicons'
import {colors} from "../constants/colors.jsx";
import {logout} from "../utils/helpers.jsx";
import {verify_token} from "../utils/http.jsx";


export default function GameBoardPage(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const {questions} = state;
    const [currentIndex, setCurrentIndex] = useState(0)
    const [roundStats, setRoundStats] = useState({
        "points": 0,
        "total_questions": questions.length,
        "wrong_answers":0,
        "correct_answers": 0,
        "difficulty": "mix"
    })

    useEffect(() => {
        verify_token(window.localStorage.getItem('token')).then((resp) => {
            if(resp.status === 1){
                console.log('ok!')
            } else {
                logout(navigate)
            }
        })
    }, []);

    function handleAnswer(points){
        const isCorrect = points > 0;
        
        const updatedStats = {
            ...roundStats,
            points: roundStats.points + points,
            correct_answers: roundStats.correct_answers + (isCorrect ? 1 : 0),
            wrong_answers: roundStats.wrong_answers + (isCorrect ? 0 : 1)
        };

        setRoundStats(updatedStats);

        if(currentIndex < (questions.length - 1)){
            setCurrentIndex(currentIndex + 1);
        } else {
            navigate("/results", {state: {stats: updatedStats}});
        }
    }

    const progress = ((currentIndex + 1) / questions.length) * 100;

    return <div className={'dark-background'}>
        <Container className="py-4">
            <div className='row navigation_bar'>
                <div className="col-6 left-navigation">
                    <Button 
                        variant="link" 
                        className="p-0 d-flex align-items-center text-decoration-none"
                        style={{color: colors.light}}
                        onClick={() => navigate('/dashboard')}
                    >
                        <ArrowBack color={colors.light} style={{marginRight: '5px'}}/>
                        Quit Game
                    </Button>
                </div>
                <div className="col-6 right-navigation">
                    <span className="score-badge">Score: {roundStats.points}</span>
                </div>
            </div>

            <div className="progress-wrapper">
                <div className="progress-bar-fill" style={{width: `${progress}%`}}></div>
            </div>

            <Row className="justify-content-center">
                <Col lg={8}>
                    <div className="game-card">
                        <span className="question-number">Question {currentIndex + 1} of {questions.length}</span>
                        <div className="question-text">
                            {decodeURIComponent(questions[currentIndex].question)}
                        </div>
                        
                        <div className="answer-grid">
                            {
                                questions[currentIndex].answers.map((answer, index) =>
                                    <div 
                                        key={index}
                                        className="answer-option"
                                        onClick={() => handleAnswer(answer.points)}
                                    >
                                        {decodeURIComponent(answer.answer)}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}