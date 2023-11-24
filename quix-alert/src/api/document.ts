import {AuthTokens} from "./model/AuthTokens";
import {api} from "./config/axiosBaseConfig";
import {DOCUMENTS_PATH} from "../consts";
import {DocumentF} from "./model/DocumentF";

export async function getAllDocuments(token: AuthTokens): Promise<DocumentF[]>{
    try {
        const { data, status } = await api.get(`${DOCUMENTS_PATH}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })

        if(status == 200){
            return data as DocumentF[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getDocumentsById(token: AuthTokens, documentId: string): Promise<DocumentF[]>{
    try {
        const { data, status } = await api.get(`${DOCUMENTS_PATH}/${documentId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 201){
            return data as DocumentF[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getDocumentsByUserId(token: AuthTokens, userId: string): Promise<DocumentF[]>{
    try {
        const { data, status } = await api.get(`${DOCUMENTS_PATH}/user/${userId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 201){
            return data as DocumentF[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}