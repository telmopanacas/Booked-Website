import axios from "axios";
import jwtDecode from "jwt-decode";

const getCurrentUserEmail = () => {
    
    var token = axios.defaults.headers.common['Authorization'];

    var decoded = jwtDecode(token);
    
    return decoded['sub'];
}
 
export default getCurrentUserEmail;