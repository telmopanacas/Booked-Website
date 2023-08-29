import { useState, useEffect } from "react";
import { fetchBookId } from "../services/BookService";

export const useGetBookId = (bookTitle, bookAuthor) => {

    const [id, setId] = useState(0);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBookId(bookTitle, bookAuthor)
        .then((data) => {
            setId(data.id);
            setIsPending(false);
            setError(null);
        })
        // The book doesn't exist in the database. And we have to create it first.
        .catch(( err => {
            console.log(err);
            console.log("yo");
            setIsPending(false);
            setError(err);
        }));
    }, []);

    return { id, isPending, error};
}