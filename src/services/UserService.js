import axios from "axios";
import getCurrentUserEmail from "../utils/getCurrentUserEmail";

export const getUserDetails = async (email) => {

    const response = await axios.post(
        "user",
        {email}
    );

    if ( response.status !== 200 ) {
        throw new Error("Error obtaining user details.");
    }

    var userDetails = response.data;
    return userDetails;
}

export const getUserUpvotedReviews = async(userId) => {
    const response = await axios.get(
        `user/${userId}/upvoted`
    );

    if( response.status !== 200 ) {
        throw new Error("Coudln't get upvoted reviews.");
    }

    const upvotedReviews = response.data;
    return upvotedReviews;
}

export const getUserDownvotedReviews = async(userId) => {
    const response = await axios.get(
        `user/${userId}/downvoted`
    );

    if( response.status !== 200 ) {
        throw new Error("Coudln't get upvoted reviews.");
    }

    const downvotedReviews = response.data;
    return downvotedReviews;
}

export const setUserIdUpvotedDownvotedReviews = async (setUserId, setUserDownvotedReviews, setUserUpvotedReviews) => {
    //1. Fetch userDetails
    getUserDetails(getCurrentUserEmail())
    .then((userDetails) => {
        const tempUserId = userDetails["id"];
        //2. With userDetails, set userId in AuthContext
        setUserId(userDetails["id"]);  
        
        //3. With userId, fetch the user's upvoted and downvoted 
        //   reviews and set them in AuthContext
        getUserUpvotedReviews(tempUserId)
        .then((upvotedReviews) => {
            setUserUpvotedReviews(upvotedReviews);
        })
        .catch((error) => {
            throw new Error(error.message);
        });

        getUserDownvotedReviews(tempUserId)
        .then((downvotedReviews) => {
            setUserDownvotedReviews(downvotedReviews);
        })
        .catch((error) => {
            throw new Error(error.message);
        });
    })
    .catch((error) => {
        throw new Error(error.message);
    });
}

export const resetUserIdUpvotedDownvotedReviews = (setUserId, setUserDownvotedReviews, setUserUpvotedReviews) => {
    setUserId(null);
    setUserDownvotedReviews([]);
    setUserUpvotedReviews([]);
}
