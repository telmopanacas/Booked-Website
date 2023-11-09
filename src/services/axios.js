import axios from "axios";
// Dev
axios.defaults.baseURL = "http://localhost:8094/api/v1/";

// Prod
//axios.defaults.baseURL = "https://sea-turtle-app-hwycl.ondigitalocean.app/api/v1/";

axios.defaults.withCredentials = true
let refresh = false;

axios.interceptors.response.use(response => response, async error => {
    if ( error.response.status === 403 && !refresh ) {
    
        refresh = true;

        const response = await axios.post("auth/refresh-token", {});

        if( response.status === 200 ) {
            /*
            Redefine the access_token
            */
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access_token']}`;

            /*
            Perform the same request but now with the acess_token refreshed
            */
            return axios(error.config);
        }
    }
    refresh = false;
    return error;
})