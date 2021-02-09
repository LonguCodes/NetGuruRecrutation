import axios from 'axios';

export function createAxios() {
    return axios.create({
        baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=11b31499'
    })
}