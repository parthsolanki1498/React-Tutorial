import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 6eQbojFT2YXe4tubqMEIrROVV9EOSXRgR1lyfx_-qEs'
        },
        params: {
            query: term,
        }
    });
    // console.log(response);
    return response.data.results;
};

export default searchImages;