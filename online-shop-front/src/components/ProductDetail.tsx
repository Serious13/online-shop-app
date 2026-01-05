
import { Product } from "../styles/interfaces"
import { getProductByName } from "../actions/getProductbyName"

import { useLocation } from 'react-router';
import { showComments } from "../actions/getComments";
import { useEffect, useState } from "react";
import { postComment } from "../actions/postComment";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router";

export default function ProductDetail() {
    const products : [] = []
    const location = useLocation();
    const { user } = location.state || {};
    const [productId,setProductId] = useState()
    const [id, setId] = useState()
    const [description, setDescription] = useState()
    const [name, setName] = useState()
    const [inStock, setInStock] = useState()
    const [comments, setComments] = useState([])
    console.log("user", location.state.id)
    let comm 
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1> Product </h1>
            <span>{ location.state.name }</span>
            <br/>
            <span> { location.state.shortDescription }</span>
            <br/>
            <span> In Stock: { location.state.inStock ? "Availible" : "Not Availible" } </span>
            <br/>
            <span>Rating : </span>
            <br/>
            <br/>
            <button className="button-detail" onClick={ async() => setComments([...await showComments(location.state.id)]) }>Show Comments</button>
            <button style={{ marginLeft: "10px"  }}><Link to="/rate" state={location.state} style={{ textDecoration: 'none', color: "black" }}>Rate product</Link></button>
            <br/>
            <ul>
                {
                    comments.map((post : {[key:string]: string}) => (
                        <li>
                            <span>User ID: {post.userId}</span>
                            <br/>
                            <span>Comment: {post.comment}</span>
                        </li>                       
                    )) 
                }
            </ul>
        
        </div>        
    )
}
//<button type="submit" className="button-detail" onClick={ () => postComment(Number(location.state.id), message) }>Add Comment</button>

/**
 *  <form>
                
            </form>     
 */