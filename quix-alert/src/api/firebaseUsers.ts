import {AuthTokens} from "./model/AuthTokens";
import {api} from "./config/axiosBaseConfig";
import {ADOPTIONS_PATH, ANIMALS_PATH, FIREBASE_USERS_PATH} from "../consts";
import {Animal} from "./model/Animal";

export async function getAllFirebaseAppUsers(token: AuthTokens): Promise<Adoption[]>{
    try {
        const { data, status } = await api.get(`${FIREBASE_USERS_PATH}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })

        if(status == 200){
            return data as Adoption[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getFirebaseAppUsersId(token: AuthTokens, userId: string): Promise<Adoption[]>{
    try {
        const { data, status } = await api.get(`${FIREBASE_USERS_PATH}/${userId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 201){
            return data as Adoption[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}