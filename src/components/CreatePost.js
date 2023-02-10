import React , {useState}from "react";
import { addDoc , collection } from "firebase/firestore";
import { db } from "../ApiService/firebase-config";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import NavBar from "./navBar";

export const CreatePost = () => {

    const [ title , setTitle ] = useState("")
    const [ content , setContent ] = useState("")

    let navigate = useNavigate();
 
const postCollectionsRef = collection(db,'post');

const createPost = async () => {
    if(title === '' || content === ''){
        alert("enter crendentials");
        return false;
    } else {
       try{
        await addDoc(postCollectionsRef , {
            title ,
            content , 
        })
       alert("Posted Successfully!")
       navigate("/BlogEditor");
       }
       catch (error){
                  console.log(error)
       }
    }
}

    return (
        <div className="containeer">
            <NavBar></NavBar>
            <div className="bg-light p-5 rounded mt-3">
                <h1>Create Post</h1>
                <div className="mb-3 ">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control"  onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="posts" className="form-label" >Post</label>
                    <textarea className="form-control"onChange={(e)=> setContent(e.target.value)}></textarea>
                </div>
                <button className="btn btn-dark" onClick={createPost}>post</button>
            </div>
        </div>
    )
} 