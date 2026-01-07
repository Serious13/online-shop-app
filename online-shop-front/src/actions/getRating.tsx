import { Product } from "../styles/interfaces"
import axios from "axios"

export async function getRating(id : string) : Promise<number> {
    try {
        const basicUrl = process.env.REACT_APP_URL
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const rating = await axios.get(`${basicUrl}/product/rating?id=${id}`, { headers : headers })
        console.log("rating", rating.data)
        return rating.data
    }
    catch(e: any) {
        console.log("e", e)
        return e
    }    
}