import {AuthTokens} from "./model/AuthTokens";
import {api} from "./config/axiosBaseConfig";
import {ADOPTIONS_PATH, ANIMALS_PATH, REPORT_PATH} from "../consts";
import {Animal} from "./model/Animal";
import {ReportF} from "./model/ReportF";

export async function getAllReport(token: AuthTokens): Promise<ReportF[]>{
    try {
        const { data, status } = await api.get(`${REPORT_PATH}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })

        if(status == 200){
            return data as ReportF[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getReportById(token: AuthTokens, reportId: string): Promise<ReportF[]>{
    try {
        const { data, status } = await api.get(`${REPORT_PATH}/${reportId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 201){
            return data as ReportF[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getAnimalsByUserId(token: AuthTokens, userId: string): Promise<ReportF[]>{
    try {
        const { data, status } = await api.get(`${REPORT_PATH}/user/${userId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 201){
            return data as ReportF[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

// devolutiva de denuncia

// explicacao de feedback (justificativa)

// status da devolucao

// data feedback
