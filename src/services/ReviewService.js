import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/avaliacao';

export const fetchAllReviews = async () => {
    try {
        const response = await axios.get(BASE_URL+"/all")

        if( response.status !== 200)  {
            throw new Error("Couldn't fetch the data from the 'avaliacao/all' endpoint.");
        }
    
        return response.data;

    } catch (error) {
        throw error;
    }
}

