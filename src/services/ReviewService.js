import axios from 'axios';
import parseDate from '../utils/parseDate.js';
import { createBook, fetchBookId } from '../services/BookService';
import { toast } from 'sonner';

export const fetchAllReviews = async () => {

    const response = await axios.get("avaliacao/all", {withCredentials: true});
    if( response.status !== 200)  {
        throw new Error(response.response.data.message);
    }
    
    const reviews = response.data;
    reviews.sort((a, b) => {
        const dateA = parseDate(a.dataAvaliacao, a.horaAvaliacao);
        const dateB = parseDate(b.dataAvaliacao, b.horaAvaliacao);
        return dateB - dateA;
    });
    return reviews;

}

export const makePOSTReview = async (titulo, userId, review, rating, votos, livroId) => {

    const response = await axios.post(
        "avaliacao/new",
        {
            titulo,
            review,
            rating,
            votos,
            livro : {
                id: livroId
            },
            user : {
                id: userId
            }
        }
    );

    if( response.status !== 200 ) {
        throw new Error("Error creating review.")
    }

    const data = response.data;
    return data;
}

export const createReview= (bookTitle, bookAuthor, postTitle, userId, review, rating, navigate) => {
    fetchBookId(bookTitle, bookAuthor)
    .then((data) => {
        const bookId = data["id"];
        toast.promise(makePOSTReview(postTitle, userId, review, rating, 0, bookId), {
            loading: "Posting review...",
            success: () => {
                navigate("/home");
                return "Review posted successfully!"
            },
            error: "Error posting the review."
        });
    })
    // The book doesn't exist in the database. And we have to create it first.
    .catch((err => {
        // We create the book and then create the review
        createBook(bookTitle, bookAuthor)
        .then((data) => {
            const bookId = data.id;
            toast.promise(makePOSTReview(postTitle, userId, review, rating, 0, bookId), {
                loading: "Posting review...",
                success: () => {
                    navigate("/home");
                    return "Review posted successfully!"
                },
                error: "Error posting the review."
            });
        })
        .catch(error => {
        });
    }));
}

export const searchReview = async (searchInput) => {
    const query = `searchInput=${searchInput}`;

    const response = await axios.get(`avaliacao/search?${query}`);

    if ( response.status !== 200 ) {
        throw new Error("Couldn't search reviews.");
    }

    const data = response.data;
    data.sort((a, b) => {
        const dateA = parseDate(a.dataAvaliacao, a.horaAvaliacao);
        const dateB = parseDate(b.dataAvaliacao, b.horaAvaliacao);
        return dateB - dateA;
    });
    return data;
}

export const updateReviewVotes = async (reviewId, votes) => {
    const query = `votos=${votes}`;

    const response = await axios.put(`avaliacao/${reviewId}?${query}`);

    if ( response.status !== 200 ) {
        throw new Error("Error upvoting review.");
    }

}

