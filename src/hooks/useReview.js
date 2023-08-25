import { useState, useEffect } from "react";
import { fetchAllReviews } from "../services/ReviewService";

export const useAllReviews = () => {
    const [reviews, setReviews] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAllReviews()
        .then((data) => {
            setReviews(data);
            setIsPending(false);
            setError(null)
        })
        .catch(( err => {
            setIsPending(false);
            setError(err);
        }));
    }, []);

    return { reviews, isPending, error };
};