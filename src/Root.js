import { useEffect, useState } from "react";
import App from "./App";
import { useIsAuthenticated } from "./hooks/useIsAuthenticated";
import { setUserIdUpvotedDownvotedReviews } from "./services/UserService";
import useAuth from "./hooks/useAuth";
import { Toaster } from "sonner";

const Root = () => {
    const { setAuth, setUserId, setUserDownvotedReviews, setUserUpvotedReviews } = useAuth();
    const [initializing, setInitializing] = useState(true);

    const { authenticated, isPending, error } = useIsAuthenticated();
    
    useEffect(() => {
        if (!isPending) {
            setAuth({ authenticated });

            // the user is authenticated and axios as the access_token stored
            if ( authenticated ) {
                setUserIdUpvotedDownvotedReviews(setUserId, setUserDownvotedReviews, setUserUpvotedReviews)
                .catch((error) => {
                    throw new Error(error.message);
                })
                .finally(() => {
                    setInitializing(false);
                });
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