import axios from 'axios'
import {
    login_info,
    stats_info,
    register_info,
    trivia_info,
    confirm_results,
    refresh_token,
    verify,
    request_reset_password_info,
    reset_password_info
} from '../../config.jsx'

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
    const response = await axios.get(stats_info.url, headers).catch((error)=>{
        console.log(error);
        return { status: 401 };
    })
    if(response.status !== 200){
        return {'status':0}
    }
    return {'status':1, 'data': response.data}
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
    const response = await axios.get(trivia_info.url + '?category='+category,headers).catch((error)=>{
        console.log(error);
        return { status: 401 };
    })
    if(response.status !== 200){
        return {'status':0}
    }
    return {'status':1, 'data': response.data}
}

export async function confirmResult(token, result){
    let headers = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await axios.post(confirm_results.url, result, headers).catch((error)=>{
        console.log(error);
        return { status: 401 };
    })
    if(response.status !== 200){
        return {'status':0}
    }
    return {'status':1, 'data': response.data}
}

export async function refreshToken(token){
    let headers = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    const response_token = axios.post(refresh_token.url,{},headers).catch((error)=>{
        console.log(error);
        return { status: 401 };
    })
    return response_token;
}

export async function verify_token(token){
    let headers = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    const response = await axios.get(verify.url, headers).catch(()=>{
        return {'status':0}
    })
    if(response.status !== 200){
        return {'status':0}
    }
    return {'status':1}
}

export async function requestResetPassword(email){
    const response = await axios.post(
        request_reset_password_info.url,
        {
            email: email
        }
    ).catch((e) => {
        return {'data':{ 'message':e.response.data.message, 'status': e.response.data.status}};
    });
    return response.data
}

export async function resetPassword(email, token, password){
    const response = await axios.post(
        reset_password_info.url,
        {
            email: email,
            token: token,
            password: password
        }
    ).catch((e) => {
        return {'data':{ 'message':e.response.data.message, 'status': e.response.data.status}};
    });
    return response.data
}