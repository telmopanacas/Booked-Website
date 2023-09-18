import axios from "axios";

export const getUserDetails = async (email) => {

    const response = await axios.post(
        "user",
        {email}
    );

    if ( response.status !== 200 ) {
        throw new Error("Error obtaining user details");
    }

    var userDetails = response.data;
    return userDetails;
}