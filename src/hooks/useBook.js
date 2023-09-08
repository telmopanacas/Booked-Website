import { useState, useEffect } from "react";
import { fetchAllBooks, fetchBookId } from "../services/BookService";

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

export const useAllBooks = () => {
    const [books, setBooks] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAllBooks()
        .then((data) => {
            setBooks(data);
            setIsPending(false);
            setError(null)
        })
        .catch(( err => {
            setIsPending(false);
            setError(err);
        }));
    }, []);

    return { books, isPending, error };
}