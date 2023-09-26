import { useEffect, useState } from "react";
import App from "./App";
import { useIsAuthenticated } from "./hooks/useIsAuthenticated";
import { getUserDetails, getUserDownvotedReviews, getUserUpvotedReviews } from "./services/UserService";
import getCurrentUserEmail from "./utils/getCurrentUserEmail";
import useAuth from "./hooks/useAuth";
import { Toaster } from "sonner";

const Root = () => {
    const { userId, setAuth, setUserId, setUserDownvotedReviews, setUserUpvotedReviews } = useAuth();
    const [initializing, setInitializing] = useState(true);

    const { authenticated, isPending, error } = useIsAuthenticated();
    
    useEffect(() => {
        if (!isPending) {
            setAuth({ authenticated });
            
            // the user is authenticated and axios as the access_token stored
            if ( authenticated ) {
                //1. Decode access_token, and with email call function getUserDetails
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
                })
                .finally(() => {
                    setInitializing(false);
                })
            }
            setInitializing(false);
        }
    }, [isPending]);

    if(initializing) {
        return <div>Initializing...</div>
    }

    return (
        <>
        <Toaster position="top-right" />
        <App />
        </>
    );

};

export default Root;