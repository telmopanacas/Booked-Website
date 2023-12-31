import axios from "axios";
import sleep from '../utils/sleep';

export const authenticate = async (email, password) => {
    const response = await axios.post(
        "auth/authenticate",
        {email, password}
    );

    if( response.status !== 200 ) {
        throw new Error("Error signing in user.")
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access_token']}`;
} 

export const register= async (displayName, email, password, confirmPassword) => {
    if ( password !== confirmPassword ) {
        throw new Error("Passwords don't match, check them again.");
    }
    
    const response = await axios.post(
        "auth/register",
        {displayName, email, password}
    );

    if( response.status !== 200 ) {
        throw new Error(response.response.data.message)
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access_token']}`;
}

export const isAuthenticated = async () => {
    const response = await axios.post("auth/refresh-token");

    if( response.status !== 200) {
        return false;
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access_token']}`;
    return true;
}

export const signout = async () => {
    const response = await axios.post("auth/logout");

    if ( response.status !== 200 ) {
        throw new Error("Error loggin out.");
    }
}