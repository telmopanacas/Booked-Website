import axios from "axios";

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
