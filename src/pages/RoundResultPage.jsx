import {useLocation, useNavigate} from "react-router-dom";
import {Trophy} from "react-ionicons";
import {colors} from "../constants/colors.jsx";
import {styles} from "../constants/styles.jsx";
import Button from "react-bootstrap/Button";
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

    return <div className={'row dark-background'}>
        <div className={"col-xl-4 col-4"}></div>
        <div className={"col-xl-4 col-4"}>
            <div style={{textAlign: "center"}}>
                <Trophy
                    color={colors.light}
                    height="250px"
                    width="250px"
                />
            </div>
            <div className="stats_container">
                <div style={styles.stats_text}>Points: { stats.points }</div>
                <div style={styles.stats_text}>Success: { (stats.correct_answers / stats.total_questions) * 100} %</div>
                <div style={styles.stats_text}>Wrong Answers: { stats.wrong_answers }</div>
            </div>
            <div style={styles.confirm_button_container}>
                <Button style={styles.confirmResultsButton} onClick={confirmHandler}>Confirm Result</Button>
            </div>
        </div>
        <div className={"col-xl-4 col-4"}></div>
    </div>
}