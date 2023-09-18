import { useState, useEffect } from "react";
import { getUserDetails } from "../services/UserService";

export const useUserDetails = (email) => {
    const [userDetails, setUserDetails] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUserDetails(email)
        .then((data) => {
            setUserDetails(data);
            setIsPending(false);
            setError(null);
        })
        .catch((error) => {
            console.log(error);
            setIsPending(false);
            setError(error)
        });
    }, [email]);

    return { userDetails, isPending, error };
}