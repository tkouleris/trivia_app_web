import axios from 'axios'
import {login_info, stats_info, register_info, trivia_info, confirm_results} from '../../config.jsx'

export async function login(credentials){
    const response = await axios.post(
        login_info.url,
        credentials
    ).catch((e) => e.toJSON());

    if(response.status !== 200){
        return {'status':0, 'message': "Wrong Credentials"}
    }

    return {'status':1, 'data': response.data}
}

export async function getStats(token){
    let headers = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await axios.get(stats_info.url, headers).catch((error)=>console.log(error))
    return {'data': response.data}
}

export async function registerUser(username, email, password){

    const response = await axios.post(
        register_info.url,
        {
            username: username,
            email: email,
            password: password
        }
    ).catch((e) => {
        return {'data':{ 'message':e.response.data.message, 'status': e.response.data.status}};
    });
    return response.data
}

export async function fetchQuestions(token, category){
    let headers = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await axios.get(trivia_info.url + '?category='+category,headers).catch((error)=>console.log(error))
    return {'data': response.data}
}

export async function confirmResult(token, result){
    let headers = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await axios.post(confirm_results.url, result, headers).catch((error)=>console.log(error))
    return {'data': response.data}
}