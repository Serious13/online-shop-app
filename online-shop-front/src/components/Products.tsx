import { useState, useEffect } from "react"
import { getProducts } from "../actions/getProducts"
import { Product, topProduct } from "../styles/interfaces"
import { getProductByName } from "../actions/getProductbyName"

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router";
import { getRating } from "../actions/getRating";


export default function Products() {
    const basicUrl = process.env.REACT_APP_URL
    const [product, setProducts] = useState<Product[]>([])
    const [productName, setProductName] = useState('')  
    const [productId, setProductId] = useState('')
    const [topProducts, setTopProducts] = useState<topProduct[]>([])
    useEffect(() => {
        const fetcProducts = async () => {
            try {
                const res = await getProducts()
                const ids : string[] = res.map((product) => String(product.id))
                let productRatings : topProduct[] = []
                let productRatingsSorted : topProduct[]= []
                let productsSliced : topProduct[]= []
                console.log("res", res)               
                console.log("ids", ids)                
                for (let id of ids) {
                    console.log("res[ids.indexOf(id)].name", res[ids.indexOf(id)].name)
                    productRatings.push({"id" : id, "score": await getRating(id), "name": res[ids.indexOf(id)].name})
                }
                productRatingsSorted = productRatings.sort((a : any,b : any) => b.score - a.score)
                productsSliced = productRatingsSorted.splice(0,10)
                //console.log("productRatings", productRatingsSorted.splice(0,9))
                setTopProducts([...[], ...productsSliced])    
                setProducts([...product, ...res])
            } catch (error) {
                console.error(error)
            }
        }
        fetcProducts()   
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
            <ul className={ "top-product-list" }>
                { topProducts.map((product : topProduct) => 
                    <li key={ product.id } className="card">{
                        <>
                            <span> Product-name: { product.name }</span><br/>
                            <span> Rating: { product.score }</span><br/>
                        </>
                    }</li>
                ) }    
            </ul>       
        </div>
    )
}