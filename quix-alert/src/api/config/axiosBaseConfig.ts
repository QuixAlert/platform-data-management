import Axios from "axios";

export const baseURL = "http://52.207.115.137:3000/";

export const api = Axios.create({
    baseURL: `${baseURL}`,
    timeout: 1000,
});