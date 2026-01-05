import { useState, useEffect } from "react"
import { getProducts } from "../actions/getProducts"
import { Product } from "../styles/interfaces"
import { getProductByName } from "../actions/getProductbyName"

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router";


export default function Products() {
    const basicUrl = process.env.REACT_APP_URL
    const [product, setProducts] = useState<Product[]>([])
    const [productName, setProductName] = useState('')  
    const [productId, setProductId] = useState('')

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await getProducts()
                console.log("res", res)
                setProducts([...product, ...res])
            } catch (error) {
                console.error(error)
            }
        }
        fetchUsers()   
    }, [])
    function handlechange(productName : string) {
        console.log("productName", productName)
        setProductName(productName)
    }
    
    return (
        <div style={{ textAlign: "center"  }}>
            <h1>List of products:</h1>
            <br/>
            <div className="search-bar">
                <input type="text" placeholder="Search product..." className="search-input" onChange={(e) => setProductName(e.target.value)}/> 
                <button className="search-button" onClick={async () => {
                    let products = await getProductByName(productName)
                    setProducts([...[], ...products])
                }}>Search</button>
            </div>
            <br/>
            <ul className={ "product-list" }>
                { product.map((product : Product) => 
                    <li key={ product.id } className="card">{
                        <>
                            <span>{ product.name }</span><br/>
                            <span> { product.shortDescription }</span><br/>
                            <span>In Stock: { product.inStock ? "Availible" : "Not Availible" }</span><br/>
                            { <Link to="/product" state={product}>Detail</Link> }                           
                        </>
                    }</li>
                ) }
            </ul>          
        </div>
    )
}