export function logout(navigate){
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('username')
    navigate('/login')
}