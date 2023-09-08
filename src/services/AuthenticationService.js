import axios from "axios";

export const authenticate = async (email, password) => {

    const response = await axios.post(
        "auth/authenticate",
        {email, password}
    );

    if( response.status != 200 ) {
        throw new Error("Error signing in user")
    }

    const data = response.data;
    return data;
} 

export const register= async (displayName, email, password) => {

    const response = await axios.post(
        "auth/register",
        {displayName, email, password}
    );

    if( response.status != 200 ) {
        throw new Error("Couldn't register new user")
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access_token']}`;
}