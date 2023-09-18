import axios from "axios";

export const authenticate = async (email, password) => {

    const response = await axios.post(
        "auth/authenticate",
        {email, password}
    );

    if( response.status !== 200 ) {
        throw new Error("Error signing in user")
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access_token']}`;
} 

export const register= async (displayName, email, password) => {

    const response = await axios.post(
        "auth/register",
        {displayName, email, password}
    );

    if( response.status !== 200 ) {
        throw new Error("Couldn't register new user")
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
        throw new Error("Error loggin out");
    }
}