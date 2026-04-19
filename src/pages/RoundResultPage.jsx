import {useLocation, useNavigate} from "react-router-dom";
import {Trophy, CheckmarkCircle, CloseCircle, StatsChart} from "react-ionicons";
import {colors} from "../constants/colors.jsx";
import { Container, Row, Col, Button } from "react-bootstrap";
import {confirmResult, refreshToken} from "../utils/http.jsx";
import {logout} from "../utils/helpers.jsx";


export default function RoundResultPage() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {stats} = state;

    async function confirmHandler(){
        refreshToken(window.localStorage.token).then((response) =>{
            if(response!== undefined && response.data.status == 1){
                window.localStorage.setItem('token',response.data.token);
                confirmResult(window.localStorage.getItem('token'), stats).then( () =>{
                    navigate("/dashboard");
                });
            }else{
                logout(navigate)
            }
        });
    }

    const successRate = Math.round((stats.correct_answers / stats.total_questions) * 100);

    return <div className={'dark-background'}>
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <div className="result-card">
                        <Trophy
                            color={colors.light}
                            height="120px"
                            width="120px"
                        />
                        <h2 className="result-title">Quiz Completed!</h2>
                        
                        <div className="result-stats">
                            <div className="result-stat-item">
                                <StatsChart color={colors.light} />
                                <span className="result-stat-value">{stats.points}</span>
                                <span className="result-stat-label">Points</span>
                            </div>
                            <div className="result-stat-item">
                                <CheckmarkCircle color="#28a745" />
                                <span className="result-stat-value">{stats.correct_answers}</span>
                                <span className="result-stat-label">Correct</span>
                            </div>
                            <div className="result-stat-item">
                                <CloseCircle color="#dc3545" />
                                <span className="result-stat-value">{stats.wrong_answers}</span>
                                <span className="result-stat-label">Wrong</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="result-stat-label">Success Rate</div>
                            <div className="progress-wrapper mt-2" style={{marginBottom: '0'}}>
                                <div className="progress-bar-fill" style={{width: `${successRate}%`}}></div>
                            </div>
                            <div className="text-end mt-1" style={{color: colors.light, fontWeight: 'bold'}}>
                                {successRate}%
                            </div>
                        </div>

                        <Button className="confirm-btn" onClick={confirmHandler}>
                            Back to Dashboard
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}