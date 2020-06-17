import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID earo3ZMm4ebAiA1wfuWqxxscaQjJRViZntpxjKB1I-M'
    }
});