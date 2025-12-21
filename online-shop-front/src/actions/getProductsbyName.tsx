import axios from "axios"
import { Product } from "../styles/interfaces"

export async function getProductsByName(productName : string) : Promise<Product[]> {
     try {
        const basicUrl = process.env.REACT_APP_URL
        console.log("productName",productName)
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const products = await axios.get(`${basicUrl}/products/${productName}`, { headers : headers })
        console.log("products", products.data)
        return products.data
    }
    catch(e: any) {
        console.log("e", e)
        return e
    }    
}