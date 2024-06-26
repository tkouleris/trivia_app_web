import {useEffect, useState} from "react";
import {getStats, fetchQuestions, refreshToken} from "../utils/http.jsx";
import { Film, Book, People, Compass } from 'react-ionicons'
import Button from "react-bootstrap/Button";
import {styles} from "../constants/styles.jsx";
import {colors} from "../constants/colors.jsx";
import {useNavigate} from "react-router-dom";
import {logout} from "../utils/helpers.jsx";


export default function DashboardPage() {
    const navigate = useNavigate();
    useEffect(() => {
        getStats(window.localStorage.getItem('token')).then((resp) => {
            setStats(resp.data.data)
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
                    navigate("/gameboard", {state: {questions: response.data}});
                })
            }else{
                logout(navigate)
            }
        });
    }

    // function logout_handler(){
    //     window.localStorage.removeItem('token')
    //     window.localStorage.removeItem('username')
    //     navigate('/login')
    // }

    return <div className={'row dark-background'}>
        <div className={"col-xl-4 col-4"}></div>
        <div className={"col-xl-4 col-4"}>
            <div className='row navigation_bar'>
                <div className="col-xl-6 left-navigation"><b>User:</b> {window.localStorage.getItem('username')}</div>
                <div className="col-xl-6 right-navigation">
                    <Button style={styles.logOutButton} onClick={() => logout(navigate)}>
                        Logout
                    </Button>
                </div>
            </div>
            <hr/>
            <h3>Categories</h3>
            <hr/>
            <div>
                <Button variant="primary" style={styles.categoryButton} onClick={()=>categorySelectionHandler('film')}>
                    <Film color={colors.light}/> Film
                </Button>
                <Button variant="primary" style={styles.categoryButton} onClick={()=>categorySelectionHandler('books')}>
                    <Book color={colors.light}/> Book
                </Button>
                <Button variant="primary" style={styles.categoryButton} onClick={()=>categorySelectionHandler('celebrities')}>
                    <People color={colors.light}/> Celebrities
                </Button>
                <Button variant="primary" style={styles.categoryButton} onClick={()=>categorySelectionHandler('politics')}>
                    <Compass color={colors.light}/> Politics
                </Button>
            </div>
            <div>
                <h3>Stats</h3>
                <hr/>
                <div><b>Points:</b> {stats["totals"]['points']} </div>
                <div><b>Correct:</b> {stats["totals"]['correct_answers']}</div>
                <div><b>Total Questions:</b> {stats["totals"]['questions']}</div>
                <div><b>Success:</b> {(Math.round((stats["totals"]['correct_answers'] / (stats["totals"]['questions']===0?1:stats["totals"]['questions']) ) * 100) * 100) / 100}%</div>
            </div>
        </div>

        <div className={"col-xl-4 col-4"}></div>
    </div>
}