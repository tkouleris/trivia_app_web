import {colors} from "./colors.jsx";
export const styles = {
    loginButton: {
        backgroundColor: "#910A67",
        borderColor: "#910A67",
        width: '40%',
        marginRight: 5
    },
    registerButton: {
        backgroundColor: "#910A67",
        borderColor: "#910A67",
        width: '40%',
        marginLeft: 5
    },
    categoryButton:{
        margin: 5,
        width: '40%',
        padding: 20,
        borderWidth: 3,
        color: colors.light_dark,
        fontWeight: 'bold',
        borderColor: colors.light_dark,
        backgroundColor: colors.dark
    },
    logOutButton: {
        color: colors.light_dark,
        borderColor: colors.light_dark,
        backgroundColor: colors.dark
    },
    question_text:{
        textAlign: 'center',
        color: colors.light,
        fontWeight: 'bold',
        fontSize: 22
    },
    answers_container:{
        marginTop: 20
    },
    answer_button:{
        width: '100%',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.light,
        borderWidth: 5,
        borderColor: colors.hard_dark,
        backgroundColor: colors.dark
    },
    stats_text:{
        color: colors.light,
        fontSize: 20,
        fontWeight: 'bold'
    },
    confirm_button_container:{
        marginTop: 20
    },
    confirmResultsButton: {
        backgroundColor: "#910A67",
        borderColor: "#910A67",
        width: '100%',
        marginLeft: 5
    },
}