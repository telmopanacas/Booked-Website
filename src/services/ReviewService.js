import axios from 'axios';
import parseDate from '../utils/parseDate.js';
import { createBook, fetchBookId } from '../services/BookService';

const BASE_URL = 'http://localhost:8080/api/v1/avaliacao';

export const fetchAllReviews = async () => {
    try {
        const response = await axios.get(BASE_URL+"/all")

        if( response.status !== 200)  {
            throw new Error("Couldn't fetch the data from the 'avaliacao/all' endpoint.");
        }
        
        const reviews = response.data;
        reviews.sort((a, b) => {
            const dateA = parseDate(a.dataAvaliacao, a.horaAvaliacao);
            const dateB = parseDate(b.dataAvaliacao, b.horaAvaliacao);
            return dateB - dateA;
        });
        return reviews;

    } catch (error) {
        throw error;
    }
}

export const makePOSTReview = async (titulo, autor, review, rating, votos, livroId) => {
    const review_created = { 
        titulo,
        autor, 
        review, 
        rating, 
        votos, 
        livro: {
            id: livroId
        }
    };

    fetch(`${BASE_URL}/new`, {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(review_created)
    });
}

export const createReview= (bookTitle, bookAuthor, postTitle, username, review, rating, navigate) => {
    fetchBookId(bookTitle, bookAuthor)
    .then((data) => {
        const bookId = data.id;
        makePOSTReview(postTitle, username, review, rating, 0, bookId)
        .then(() => {
            alert("Review added successfully");
            navigate("/home");
        });
    })
    // The book doesn't exist in the database. And we have to create it first.
    .catch((err => {
        // We create the book and then create the review
        createBook(bookTitle, bookAuthor)
        .then((data) => {
            const bookId = data.id;
            makePOSTReview(postTitle, username, review, rating, 0, bookId)
            .then(() => {
                alert("Review added successfully");
                navigate("/home");
            });
        })
        .catch(error => {
        });
    }));
}
