const BASE_URL = 'http://localhost:8080/api/v1/livro';

export const fetchBookId = async (bookTitle, bookAuthor) => {
    const query = `titulo=${bookTitle}&autor=${bookAuthor}`

    const response = await fetch(`${BASE_URL}/find?${query}`);
    if (!response.ok) {
        throw new Error("Couldn't fetch the data from the 'livro/find' endpoint.");
    }
    return await response.json();
}

export const createBook = async (titulo, autor) => {
    const book = {
        titulo,
        autor
    };

    const response = await fetch(`${BASE_URL}/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(book)
    });

    if (!response.ok) {
        throw new Error("Failed to create a new book.");
    }

    const createdBook = await response.json();

    return createdBook;
}