import axios from "axios";
import {Login} from "./model/login";
import {api} from "./baseConfig";
import {AuthTokens} from "./model/AuthTokens";
import {AUTH_PATH} from "./utils";

export async function signIn(login: Login): Promise<AuthTokens>{
    try {
        const { data, status } = await api.post(`${AUTH_PATH}/login`, login)
        if(status == 201){
            return {token: data.token, refreshToken: data.refreshToken}
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

function signUp() {
    // return axios.post()
}

export async function getTokens(token: string): Promise<AuthTokens> {
    try {
        const { data, status } = await api.post(`${AUTH_PATH}/refresh-token`, {
            token: token
        })
        if(status == 201){
            return {token: data.token, refreshToken: data.refreshToken}
        }
    } catch (error){
        throw new Error("Login error!")
    }
}