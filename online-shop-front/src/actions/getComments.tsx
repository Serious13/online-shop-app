import { Product } from "../styles/interfaces"
import axios from "axios"

export async function showComments(id:number) : Promise<[]> {
    try {
        const basicUrl = process.env.REACT_APP_URL
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const products = await axios.get(`${basicUrl}/product/${id}`, { headers : headers })
        console.log("posts", products.data.posts)
        return products.data.posts
    }
    catch(e: any) {
        console.log("e", e)
        return e
    }    
}