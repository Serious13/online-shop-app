
import { Product } from "../styles/interfaces"
import { getProductsByName } from "../actions/getProductsbyName"
import { useLocation } from 'react-router';

export default function ProductDetail() {
    const location = useLocation();
    const { user } = location.state || {};
    console.log("user", location.state)
    const products : [] = []
    return (
        <>
            <h1>Produkt Information</h1>
            <span>{location.state.name }</span><br/>
            <span> { location.state.shortDescription }</span><br/>
            <span>In Stock: { location.state.inStock ? "Availible" : "Not Availible" }</span><br/>
            <button className="button-detail" /*onClick={}*/>Add Comment</button>
        </>        
    )
}