import {AuthTokens} from "./model/AuthTokens";
import {api} from "./config/axiosBaseConfig";
import {ANIMALS_PATH} from "../consts";
import {Animal} from "./model/Animal";

export async function getAllAnimals(token: AuthTokens): Promise<Animal[]>{
    try {
        const { data, status } = await api.get(`${ANIMALS_PATH}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })

        if(status == 200){
            return data as Animal[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getAnimalById(token: AuthTokens, animalId: string): Promise<Animal>{
    try {
        const { data, status } = await api.get(`${ANIMALS_PATH}/${animalId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 200){
            return data as Animal
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function getAnimalsByUserId(token: AuthTokens, userId: string): Promise<Animal[]>{
    try {
        const { data, status } = await api.get(`${ANIMALS_PATH}/user/${userId}`, {
            headers: { Authorization: `Bearer ${token.token}` }
        })
        if(status == 201){
            return data as Animal[]
        }
    } catch (error){
        throw new Error("Login error!")
    }
}

export async function createAnimal(token: AuthTokens, animal: Animal): Promise<boolean> {
  try {
    const { data, status } = await api.post(`${ANIMALS_PATH}/register`, {
      data: animal,
      headers: { Authorization: `Bearer ${token.token}` }
  })
    if(status == 201){
        return true
    }
  } catch (error){
      throw new Error("Error!")
  }
}