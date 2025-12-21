import { Product } from "../styles/interfaces"
import axios from "axios"

export async function getProducts() : Promise<Product[]> {
    try {
        const basicUrl = process.env.REACT_APP_URL
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const products = await axios.get(`${basicUrl}/products`, { headers : headers })
        console.log("products", products.data)
        return products.data
    }
    catch(e: any) {
        console.log("e", e)
        return e
    }    
}