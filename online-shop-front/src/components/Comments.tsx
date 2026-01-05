import { useState } from "react";
import ReactStars from 'react-stars'
import { useLocation } from 'react-router';
import { postComment } from "../actions/postComment";

export default function Comments() {
    const [name,setName] = useState("")
    const [message,setMessage] = useState("")
    const [status, setStatus] = useState("Not Submitted")
    const [rating, setRating] = useState(3);
    const ratingChanged = (newRating : number) => {
        console.log(newRating);
    }
    const location = useLocation();
    return(
        <div style={{ display: "grid", justifyContent: "center", marginTop: "50px" }}>
            <h1>Rate</h1>
            <span>Productname: {location.state.name}</span>     
            <label htmlFor="name" style={{ marginTop: "20px", justifyContent: "center" }}>
                <span>Name : </span>
                <input type="text" placeholder="Type name" onChange={ (e:any) => {        
                    setName(e.target.value)} }
                    name="name"/>
            </label>
            <br/>
            <br/>
            <label htmlFor="comment" style={{ marginTop: "20px", justifyContent: "center"}}>
                <span>Comment : </span>
                <input type="text" placeholder="Type comment" onChange={ (e:any) => {          
                    setMessage(e.target.value)} } 
                    name="comment"  style={{ justifyContent: "center", height: "70px" }}/> 
            </label>
            <br/>
            <br/>
            <ReactStars
                count={5}
                value={rating}
                onChange={setRating}
                size={30}
                half={true}
                color2="#ffd700"
                className="stars"
            />
            <br/>
            <br/>
            <button style={{ marginTop: "20px", justifyContent: "center" }} onClick={() => {postComment(location.state.id, name, message, rating); setStatus("Submitted")}}>Submit</button>
            <span>Status : {status}</span>
        </div>
    )
}
