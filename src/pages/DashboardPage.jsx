import {useEffect, useState} from "react";
import {getStats, fetchQuestions, refreshToken} from "../utils/http.jsx";
import { Film, Book, People, Compass, Trophy, CheckmarkCircle, HelpCircle, StatsChart, LogOut } from 'react-ionicons'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {colors} from "../constants/colors.jsx";
import {useNavigate} from "react-router-dom";
import {logout} from "../utils/helpers.jsx";


export default function DashboardPage() {
    const navigate = useNavigate();
    useEffect(() => {
        getStats(window.localStorage.getItem('token')).then((resp) => {
            console.log(resp)
            if(resp.status === 1){
                setStats(resp.data.data)
            } else {
                logout(navigate)
            }
        })
    }, []);

    const [stats, setStats] = useState({
        "leaderboards": [],
        "totals": {
            "correct_answers": 0,
            "points": 0,
            "questions": 0
        }
    })

    function categorySelectionHandler(category){
        refreshToken(window.localStorage.token).then((response) =>{
            if(response!== undefined && response.data.status == 1){
                window.localStorage.setItem('token',response.data.token);
                fetchQuestions(window.localStorage.token, category).then((response)=>{
                    if(response.status === 1){
                        navigate("/gameboard", {state: {questions: response.data}});
                    } else {
                        logout(navigate);
                    }
                })
            }else{
                logout(navigate)
            }
        });
    }

    const successRate = (Math.round((stats["totals"]['correct_answers'] / (stats["totals"]['questions']===0?1:stats["totals"]['questions']) ) * 100) * 100) / 100;

    return <div className={'dark-background'}>
        <Container className="py-4">
            <div className='row navigation_bar'>
                <div className="col-6 left-navigation">
                    <b>Welcome,</b>&nbsp;{window.localStorage.getItem('username')}
                </div>
                <div className="col-6 right-navigation text-end">
                    <Button 
                        variant="link" 
                        className="p-0 border-0" 
                        style={{ color: colors.light }} 
                        onClick={() => logout(navigate)}
                        title="Logout"
                    >
                        <LogOut 
                            color={colors.light} 
                            height="30px" 
                            width="30px"
                        />
                    </Button>
                </div>
            </div>

            <Row className="mt-4">
                <Col>
                    <h3 className="section-title"><StatsChart color={colors.light} style={{verticalAlign: 'middle', marginRight: '10px'}}/>Your Performance</h3>
                    <div className="stats_container">
                        <Row>
                            <Col xs={6} md={3} className="stat-item">
                                <Trophy color={colors.light} className="mb-2"/>
                                <span className="stat-value">{stats["totals"]['points']}</span>
                                <span className="stat-label">Points</span>
                            </Col>
                            <Col xs={6} md={3} className="stat-item">
                                <CheckmarkCircle color={colors.light} className="mb-2"/>
                                <span className="stat-value">{stats["totals"]['correct_answers']}</span>
                                <span className="stat-label">Correct</span>
                            </Col>
                            <Col xs={6} md={3} className="stat-item">
                                <HelpCircle color={colors.light} className="mb-2"/>
                                <span className="stat-value">{stats["totals"]['questions']}</span>
                                <span className="stat-label">Questions</span>
                            </Col>
                            <Col xs={6} md={3} className="stat-item">
                                <StatsChart color={colors.light} className="mb-2"/>
                                <span className="stat-value">{successRate}%</span>
                                <span className="stat-label">Success</span>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h3 className="section-title">Select Category</h3>
                    <Row className="gy-4">
                        <Col xs={12} sm={6} md={3}>
                            <div className="category-card" onClick={()=>categorySelectionHandler('film')}>
                                <Film color="#fff" height="50px" width="50px" className="category-icon"/>
                                <div className="category-name">Film</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div className="category-card" onClick={()=>categorySelectionHandler('books')}>
                                <Book color="#fff" height="50px" width="50px" className="category-icon"/>
                                <div className="category-name">Book</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div className="category-card" onClick={()=>categorySelectionHandler('celebrities')}>
                                <People color="#fff" height="50px" width="50px" className="category-icon"/>
                                <div className="category-name">Celebrities</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div className="category-card" onClick={()=>categorySelectionHandler('politics')}>
                                <Compass color="#fff" height="50px" width="50px" className="category-icon"/>
                                <div className="category-name">Politics</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
}