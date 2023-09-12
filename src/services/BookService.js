import axios from "axios";

export const fetchBookId = async (bookTitle, bookAuthor) => {
    const query = `titulo=${bookTitle}&autor=${bookAuthor}`

    const response = await axios.get(`livro/find?${query}`, {
        withCredentials: true});

    if( response.status != 200 ) {
        throw new Error("Error fetching book id");
    }

    const data = response.data;
    return data;
}

export const createBook = async (titulo, autor) => {
    const book = {
        titulo,
        autor
    };

    const response = await axios.post("livro/new", book);

    if( response.status != 200 ) {
        throw new Error("Error creating book");
    }

    const data = response.data;
    return data;
}

export const fetchAllBooks = async () => {
    const response = await axios.get("livro/all");

    if ( response.status != 200 ) {
        throw new Error("Couldn't fetch data from 'livro/all' endpoint");
    }

    const books = response.data;

    return books;
}