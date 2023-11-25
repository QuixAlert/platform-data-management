import {AuthTokens} from "./model/AuthTokens";
import {api} from "./config/axiosBaseConfig";
import {ADOPTIONS_PATH} from "../consts";

export async function getAllAdoption(token: AuthTokens): Promise<Adoption[]>{
    try {
        const { data, status } = await api.get(`${ADOPTIONS_PATH}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })

        if(status == 200){
            return data as Adoption[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getAdoptionById(token: AuthTokens, adoptionId: string): Promise<Adoption[]>{
    try {
        const { data, status } = await api.get(`${ADOPTIONS_PATH}/${adoptionId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 201){
            return data as Adoption[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getAdoptionByUserId(token: AuthTokens, userId: string): Promise<Adoption[]>{
    try {
        const { data, status } = await api.get(`${ADOPTIONS_PATH}/user/${userId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 201){
            return data as Adoption[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

// devolutiva de adocao

// explicacao de feedback (justificativa)

// status da devolucao

// data feedback