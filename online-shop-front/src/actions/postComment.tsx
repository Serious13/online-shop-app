import { Product } from "../styles/interfaces"
import axios from "axios"

export async function postComment(id : number, name: string, message : string, score : number) : Promise<any> {
    try {
        const basicUrl = process.env.REACT_APP_URL
        const headers = {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }
        const comment = { "name" : name, "message" : message, "rating" : score }
        await axios.post(`${basicUrl}/product/${id}`, comment , { headers : headers })
    }
    catch(e: any) {
        console.log("e", e)
        return e
    }    
}