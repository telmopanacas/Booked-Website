import { useState, useEffect } from "react";
import { isAuthenticated } from "../services/AuthenticationService";

export const useIsAuthenticated = () => {
    const [authenticated, setIsAuthenticated] = useState(false);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        isAuthenticated()
        .then((response) => {
            setIsAuthenticated(response);
            setIsPending(false);
            setError(null);
        })
        .catch((error) => {
            setIsPending(false);
            setError(error);
        })
    }, []);

    return { authenticated, isPending, error };
}