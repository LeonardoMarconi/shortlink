import axios from 'axios';

export const key = '061e81dac3e45826136b36ca0750679cf7d62e64';

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;
