import {AuthTokens} from "./model/AuthTokens";
import {api} from "./config/axiosBaseConfig";
import { REPORT_FEEDBACK_PATH } from "../consts";
import { Feedback } from "./model/Feedback";

export async function registerReportFeedback(token: AuthTokens, feedback: Feedback): Promise<boolean> {
  try {
    const { data, status } = await api.post(`${REPORT_FEEDBACK_PATH}/register`, {
      data: feedback,
      headers: { Authorization: `Bearer ${token.token}` }
  })
    if(status == 201){
        return true
    }
  } catch (error){
      throw new Error("Error!")
  }
}

export async function getAllReportFeedback(token: AuthTokens): Promise<Feedback[]>{
  try {
      const { data, status } = await api.get(`${REPORT_FEEDBACK_PATH}`, {
          headers: { Authorization: `Bearer ${token.token}` }
      })

      if(status == 200){
          return data as Feedback[]
      }
  } catch (error){
      throw new Error("Login error!")
  }
}