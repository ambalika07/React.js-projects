import axios from 'axios';

const KEY = 'AIzaSyCpjBgtiKRx2XKsChx5-AwgvNFAH90PptE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`,
    }
});