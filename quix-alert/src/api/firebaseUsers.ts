import {AuthTokens} from "./model/AuthTokens";
import {api} from "./config/axiosBaseConfig";
import {ADOPTIONS_PATH, ANIMALS_PATH, FIREBASE_USERS_PATH} from "../consts";
import {FirebaseUser} from "./model/FirebaseUser";

export async function getAllFirebaseAppUsers(token: AuthTokens): Promise<FirebaseUser[]>{
    try {
        const { data, status } = await api.get(`${FIREBASE_USERS_PATH}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })

        if(status == 200){
            return data as FirebaseUser[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getFirebaseAppUserById(token: AuthTokens, userId: string): Promise<FirebaseUser>{
    try {
        const { data, status } = await api.get(`${FIREBASE_USERS_PATH}/${userId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 200){
            return data as FirebaseUser
        }
    } catch (error){
        throw new Error("Login error!")
    }
}
