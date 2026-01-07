
import { Product } from "../styles/interfaces"
import { getProductByName } from "../actions/getProductbyName"

import { useLocation } from 'react-router';
import { showComments } from "../actions/getComments";
import { useEffect, useState } from "react";
import { postComment } from "../actions/postComment";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router";
import axios from "axios"
import { getRating } from "../actions/getRating";

export default function ProductDetail() {
    const products : [] = []
    const location = useLocation();
    const [comments, setComments] = useState([])
    const [rating, seRating] = useState(0)
    useEffect( () => {
        const calcRating = async () => {
            let rating = await getRating(location.state.id)
            console.log("rating",  rating)
            seRating(rating)
        }
        calcRating()
    },[])
    console.log("user", location.state.id)
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1> Product </h1>
            <span>{ location.state.name }</span>
            <br/>
            <span> { location.state.shortDescription }</span>
            <br/>
            <span> In Stock: { location.state.inStock ? "Availible" : "Not Availible" } </span>
            <br/>
            <span>Rating : {rating}</span>
            <br/>
            <br/>
            <button className="button-detail" onClick={ async() => setComments([...await showComments(location.state.id)]) }>Show Comments</button>
            <button style={{ marginLeft: "10px"  }}><Link to="/rate" state={location.state} style={{ textDecoration: 'none', color: "black" }}>Rate product</Link></button>
            <br/>
            <ul>
                {
                    comments.map((post : {[key:string]: string}) => (
                        <li>
                            <span>Name: {post.userName}</span>
                            <br/>
                            <span>Comment: {post.comment}</span>
                        </li>                       
                    )) 
                }
            </ul>        
        </div>        
    )
}