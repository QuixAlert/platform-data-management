import Axios from "axios";

export const baseURL = "http://localhost:3001";

export const api = Axios.create({
    baseURL: `${baseURL}`,
    timeout: 1000,
});