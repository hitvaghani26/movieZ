import axios from 'axios'

const BASE_URL =  "https://api.themoviedb.org/3";
const TOKEN = process.env.REACT_APP_TOKEN;

const header = {
    Authorization: "Bearer "+ TOKEN,
};

export const fetchData = async (url,params) => {
    try {
        const {data} = await axios.get(BASE_URL+ url, {
            headers: header,
            params: params,
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
} 